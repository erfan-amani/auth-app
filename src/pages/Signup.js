import Card from '../component/ui/Card';
import SignupForm from '../component/form/SignupForm';
import GoogleButton from '../component/form/GoogleButton';
import GithubButton from '../component/form/GithubButton';

const Signup = () => {
  return (
    <Card>
      <div className="text-center space-1">
        <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-gray-800">
          Sign Up
        </h2>
        <p className="text-sm md:text-base">Create a new acount!</p>
      </div>
      <SignupForm />
      <div className="w-full">
        <span className="line w-full m-0 text-gray-700 text-lg mb-4">or</span>
        <div className="grid grid-cols-1 gap-3 justify-between w-full">
          <GoogleButton />
          <GithubButton />
        </div>
      </div>
    </Card>
  );
};

export default Signup;
