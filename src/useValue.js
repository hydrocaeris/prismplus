// useValue.js
import { useState } from "react";

// Custom hook useValue yang menerima nilai awal (boolean, misalnya)
// dan mengembalikan array berisi value dan object dengan fungsi setValue.
const useValue = (initialValue) => {
  const [value, setValue] = useState(initialValue); // deklarasi dan inisialisasi state, local scope
  return [value, { setValue }]; // mengembalikan array agar sesuai dengan pattern yang sudah dibuat
};

export default useValue;
