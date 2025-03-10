import { createContext, useContext } from "react";

const ValueContext = createContext({
  value: false,
  setValue: () => {},
});

export const useValueContext = () => useContext(ValueContext);

export default ValueContext;