import GoogleIcon from '../icons/GoogleIcon';
import { useAuth } from '../../context/authContext';

const GoogleButton = () => {
  const authCtx = useAuth();

  const signinWithGoogleHanlder = () => {
    authCtx.signinWithGoogle();
  };

  return (
    <button
      onClick={signinWithGoogleHanlder}
      type="button"
      className="flex items-center bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300"
    >
      <GoogleIcon className="rounded-2xl" />
      <span className="px-2 text-white mx-auto text-sm md:text-base">
        Sign in with Google
      </span>
    </button>
  );
};

export default GoogleButton;
