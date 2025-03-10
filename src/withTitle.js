import React, { useReducer } from 'react';
import ReactDOM from "react-dom/client";
import withTitle from './withTitle';

// Initial state dengan count = 0
const initialState = { count: 0 };

// Reducer function yang menangani action untuk menambah count
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // Mengembalikan state baru dengan count bertambah 1
    default:
      return state;
  }
}

function HitungComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Hitung: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HitungComponent />);
export default withTitle;