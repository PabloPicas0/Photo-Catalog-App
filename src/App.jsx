import { useEffect, useState } from "react";

import SearchBar from "./Components/SearchBar";

import "./App.css";

function App() {
  const [autocomplete, setAutocomplete] = useState([]);

  useEffect(() => {
    const rngInt = [];

    for (let i = 0; i < 30; i++) {
      rngInt.push(String(i));
    }

    setAutocomplete(rngInt);
  }, []);

  return (
    <>
      <SearchBar autocomplete={autocomplete} />
    </>
  );
}

export default App;
