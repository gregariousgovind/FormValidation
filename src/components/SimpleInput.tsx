import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`form-control ${
          !enteredNameIsValid && enteredNameTouched ? 'invalid' : ''
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={onChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {!enteredNameIsValid && enteredNameTouched && (
          <p className="error-text">Name must not be empty....</p>
        )}
      </div>
      <div
        className={`form-control ${
          !enteredEmailIsValid && enteredEmailTouched ? 'invalid' : ''
        }`}
      >
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="text"
          id="email"
          onChange={onEmailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {!enteredEmailIsValid && enteredEmailTouched && (
          <p className="error-text">Please Enter a valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
