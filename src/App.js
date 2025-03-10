import React from "react";
import withTitle  from "./withTitle";
import useValue from "./useValue";
import ValueContext from "./ValueContext";
import Auth from "./Auth";

const App = (props) => {
  const [value, { setValue }] = useValue(false);

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      <div className="App">
        <h1>Halaman: {props.title}</h1>
        <Auth />
      </div>
    </ValueContext.Provider>
  );
};

export default withTitle(App);