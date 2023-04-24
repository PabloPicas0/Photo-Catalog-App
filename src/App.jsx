import { useEffect, useState } from "react";

import "./App.css";

import SearchBar from "./Components/SearchBar";
import MainCard from "./Components/Card";

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
      <MainCard autocomplete={autocomplete} />
    </>
  );
}

export default App;
