import GithubIcon from '../icons/GithubIcon';
import { useAuth } from '../../context/authContext';

const GithubButton = () => {
  const authCtx = useAuth();

  const signinWithGithubHandler = () => {
    authCtx.signinWithGithub();
  };

  return (
    <button
      onClick={signinWithGithubHandler}
      type="button"
      className="flex items-center bg-black rounded-md  hover:bg-gray-800 transition duration-300"
    >
      <GithubIcon className="rounded-2xl" />
      <p className="px-2 text-white mx-auto text-sm md:text-base">
        Log in with Github
      </p>
    </button>
  );
};

export default GithubButton;
