import React from 'react';
import { render } from 'react-dom';
import './style.css';

import SimpleInput from './src/components/SimpleInput';

function App() {
  return (
    <div className="app">
      <SimpleInput />
    </div>
  );
}

render(<App />, document.getElementById('root'));
