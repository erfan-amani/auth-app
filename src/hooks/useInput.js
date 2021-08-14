import { useState } from 'react';

const useInput = (validator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validator(value);
  const hasError = isTouched && !valueIsValid;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
  };
};

export default useInput;
