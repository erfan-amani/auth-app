import Card from '../component/ui/Card';
import SigninForm from '../component/form/SigninForm';

const Signup = () => {
  return (
    <Card>
      <div className="text-center space-1">
        <h2 className="font-bold text-2xl xl:text-3xl text-gray-800">
          Sign In
        </h2>
        <p>Enter to your acount!</p>
      </div>
      <SigninForm />
    </Card>
  );
};

export default Signup;
