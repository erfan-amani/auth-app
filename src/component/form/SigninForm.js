import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useAuth } from '../../context/authContext';
import { useState } from 'react';
import LoadingSpinner from '../ui/LoadingSppiner';

const SigninForm = () => {
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useAuth();

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((email) => email.includes('@'));

  const {
    value: password,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
  } = useInput((password) => password.trim().length >= 6);

  const formIsValid = emailIsValid && passwordIsValid;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    // Send request to firebase auth
    try {
      setIsLoading(true);
      await authCtx.signin(email, password);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setFormError("User doesn't exist!");
      }

      if (error.code === 'auth/invalid-email') {
        setFormError('Please enter a valid email!');
      }

      if (error.code === 'auth/wrong-password') {
        setFormError('Password is wrong!');
      }

      setIsLoading(false);
    }
  };

  const resetPasswordHandler = async () => {
    await authCtx.resetPassword('erfanforvpn@gmail.com');
  };

  return (
    <form onSubmit={submitHandler} className="space-y-2 w-full form">
      {formError && (
        <p className="text-red-600 py-1 px-3 bg-red-200 border-red-300 border-2">
          {formError}
        </p>
      )}
      <div className="flex flex-col gap-1">
        <label className="text-sm md:text-base">Email</label>
        <input
          type="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={`border-gray-300 border-2 text-base md:text-lg p-1 pl-3 focus:outline-none focus:border-indigo-500 ${
            emailHasError && 'border-red-400'
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm md:text-base">Password</label>
        <input
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          className={`border-gray-300 border-2 text-base md:text-lg p-1 pl-3 focus:outline-none focus:border-indigo-500 mb-4 ${
            passwordHasError && 'border-red-400'
          }`}
        />
      </div>
      {!isLoading ? (
        <button
          disabled={!formIsValid}
          type="submit"
          className="bg-indigo-700 text-white py-2 w-full hover:bg-indigo-600 disabled:cursor-not-allowed text-sm md:text-base"
        >
          Sign in
        </button>
      ) : (
        <LoadingSpinner />
      )}
      <div>
        <p
          onClick={resetPasswordHandler}
          className="cursor-pointer w-full text-center text-indigo-900 text-sm md:text-bas"
        >
          Forget your password ?
        </p>

        <div className="text-gray-800 text-center text-sm md:text-bas">
          Don't have an acount ? {}
          <Link to="/signup" className="underline font-semi-bold">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
