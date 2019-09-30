import React from 'react';
import ReactDOM from 'react-dom';

import Header from './containers/Header';
import FormContent from './containers/FormContent';

import './styles.css';

function App() {
  return (
    <>
      <Header />
      <FormContent />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
