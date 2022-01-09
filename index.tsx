import React from 'react';
import { render } from 'react-dom';
import './style.css';

// import SimpleInput from './src/components/SimpleInput';
import BasicForm from './src/components/BasicForm';

function App() {
  return (
    <div className="app">
      <BasicForm />
    </div>
  );
}

render(<App />, document.getElementById('root'));
