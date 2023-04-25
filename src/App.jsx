import { useEffect, useState } from "react";

import "./App.css";

import SearchBar from "./Components/SearchBar";
import MainCard from "./Components/Card";

function App() {
  const [autocomplete, setAutocomplete] = useState([]);

  useEffect(() => {
    const rngInt = [];

    for (let i = 0; i < 12; i++) {
      rngInt.push({ content: [] });

      for (let j = 0; j < 30; j++) {
        rngInt[i].content.push(String(j));
      }
    }

    setAutocomplete(rngInt);
  }, []);

  return (
    <>
      <section id="catalog">
        <SearchBar autocomplete={autocomplete} />
        <MainCard autocomplete={autocomplete} />
      </section>
    </>
  );
}

export default App;
