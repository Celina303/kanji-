import { Input, Spin } from 'antd';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../../../services';
import DEFINE_ROUTERS from '../../../constants/routers-mapper';
import { RootState } from '../../../lib/store';
import GeneralLoading from '../../../components/base/GeneralLoading';
import Visibility from '../../../components/base/visibility';

export default function ResetPassword() {
  const { token } = useParams<{ token: string }>();
  const user = useSelector((state: RootState) => state.user);
  const isLoggedIn = user.id;
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onHandleSubmit = async () => {
    if (!password) {
      toast.error('Please enter password');
      return;
    }
    if (!token) {
      toast.error('Token is required');
      return;
    }
    try {
      setLoading(true);
      const rs = await authService.resetPassword(token, password);

      if (rs.message === 'The new password cannot be the same as the old password') {
        toast.error(rs.message);
        return;
      }

      toast.success(rs.message);
      navigate(DEFINE_ROUTERS.auth.login);
    } catch (error: any) {
      toast.error(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigate(DEFINE_ROUTERS.auth.login);
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to={DEFINE_ROUTERS.home} replace />
      ) : (
        <div className="flex h-full w-full justify-center items-center">
          <section className="h-full">
            <div className="container h-full p-10">
              <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div className="w-full">
                  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div className="g-0 lg:flex lg:flex-wrap">
                      <div className="px-4 md:px-0 w-full bg-gray-800">
                        <div className="md:mx-12 md:p-12">
                          <div className="text-center">
                            <img
                              className="mx-auto w-32"
                              src="https://flowbite.com/docs/images/logo.svg"
                              alt="logo"
                            />
                            <h4 className="mb-12 mt-8 pb-1 text-xl font-semibold text-white ">
                              We are Kanji Web
                            </h4>
                          </div>

                          <form>
                            <p className="mb-4 text-white">
                              Please enter your new password
                            </p>
                            <Input.Password
                              type="password"
                              placeholder="New password"
                              className="mb-4"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            ></Input.Password>
                            <div className="mb-12 pb-1 pt-1 text-center">
                              <Visibility
                                visibility={!loading}
                                suspenseComponent={<Spin />}
                              >
                                <button
                                  disabled={loading}
                                  className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-0px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                  type="button"
                                  style={{
                                    background: '#00aaff',
                                  }}
                                  onClick={() => onHandleSubmit()}
                                >
                                  Reset password
                                </button>
                              </Visibility>
                            </div>

                            <div className="flex items-center justify-between pb-6">
                              <p className="mb-0 mr-2 text-white">Have an account?</p>
                              <button
                                type="button"
                                onClick={handleLogin}
                                className="text-white inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
