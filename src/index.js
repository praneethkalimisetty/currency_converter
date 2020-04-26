import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Own from './myOwn';

// const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<Own />, document.getElementById('root'));