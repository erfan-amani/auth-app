import Card from '../component/ui/Card';
import SigninForm from '../component/form/SigninForm';
import GoogleButton from '../component/form/GoogleButton';
import GithubButton from '../component/form/GithubButton';

const Signup = () => {
  return (
    <Card>
      <div className="text-center">
        <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-gray-800">
          Sign In
        </h2>
        <p className="text-sm md:text-base">Enter to your acount!</p>
      </div>
      <SigninForm />
      <div className="w-full">
        <span className="line w-full m-0 text-gray-700 text-lg mb-2 md:mb-4">
          or
        </span>
        <div className="grid grid-cols-1 gap-3 justify-between w-full">
          <GoogleButton />
          <GithubButton />
        </div>
      </div>
    </Card>
  );
};

export default Signup;
