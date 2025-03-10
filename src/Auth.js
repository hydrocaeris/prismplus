// Auth.js
import React from "react";
import ReactDOM from "react-dom/client";
import useValue from "./useValue"; // Mengimpor custom hook useValue dari file tersendiri

const Auth = () => {
  // Menggunakan custom hook useValue dengan nilai awal false
  const [value, { setValue }] = useValue(false);

  return (
    <div>
      <button type="button" onClick={() => setValue(!value)}>
        {value ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Auth />);
export default Auth;
