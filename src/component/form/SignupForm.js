import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useAuth } from '../../context/authContext';
import { useState } from 'react';
import LoadingSpinner from '../ui/LoadingSppiner';

const SignupForm = () => {
  const [formError, setFormError] = useState(null);
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

  const {
    value: confirmPassword,
    valueIsValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    changeHandler: confirmPasswordChangeHandler,
    blurHandler: confirmPasswordBlurHandler,
  } = useInput((value) => value === password);

  const formIsValid = emailIsValid && passwordIsValid && confirmPasswordIsValid;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    // Send request to firebase auth
    try {
      setIsLoading(true);

      await authCtx.signup(email, password);
    } catch (error) {
      console.log(error.message);

      if (error.code === 'auth/weak-password') {
        setFormError('Choose a stronger password!');
      }

      if (error.code === 'auth/invalid-email') {
        setFormError('Please enter a valid email!');
      }

      if (error.code === 'auth/email-already-in-use') {
        setFormError('Email you entered has already exist!');
      }

      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4 w-full">
      {formError && (
        <p className="text-red-600 py-1 px-3 bg-red-200 border-red-300 border-2">
          {formError}
        </p>
      )}
      <div className="flex flex-col gap-1">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={`border-gray-300 border-2 text-lg p-1 pl-3 focus:outline-none focus:border-indigo-500 ${
            emailHasError && 'border-red-400'
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          className={`border-gray-300 border-2 text-lg p-1 pl-3 focus:outline-none focus:border-indigo-500 ${
            passwordHasError && 'border-red-400'
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Confirm password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={confirmPasswordChangeHandler}
          onBlur={confirmPasswordBlurHandler}
          className={`border-gray-300 border-2 text-lg p-1 pl-3 focus:outline-none focus:border-indigo-500 mb-4 ${
            confirmPasswordHasError && 'border-red-400'
          }`}
        />
      </div>
      {!isLoading ? (
        <button
          disabled={!formIsValid}
          type="submit"
          className="bg-indigo-700 text-white py-2 w-full hover:bg-indigo-600 disabled:cursor-not-allowed"
        >
          Sign up
        </button>
      ) : (
        <LoadingSpinner />
      )}
      <div className="text-gray-800 text-center">
        Already Have an acount ? {}
        <Link to="/signin" className="underline font-semi-bold">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
