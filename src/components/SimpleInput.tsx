import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, seEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  let formIsValid = false;

  if (enteredNameIsValid) formIsValid = true;

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    seEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    seEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    seEnteredNameTouched(false);
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
