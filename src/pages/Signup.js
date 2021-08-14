import Card from '../component/ui/Card';
import SignupForm from '../component/form/SignupForm';

const Signup = () => {
  return (
    <Card>
      <div className="text-center space-1">
        <h2 className="font-bold text-2xl xl:text-3xl text-gray-800">
          Sign Up
        </h2>
        <p>Create a new acount!</p>
      </div>
      <SignupForm />
    </Card>
  );
};

export default Signup;
