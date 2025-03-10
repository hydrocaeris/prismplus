import React from 'react';
import withTitle  from './withTitle';

const App = (props) => {
  return (
    <div className="App">
      <h1>Halaman: {props.title}</h1>
    </div>
  );
};

export default withTitle(App);