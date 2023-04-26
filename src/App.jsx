import { useEffect, useState } from "react";

import "./App.css";

import SearchBar from "./Components/SearchBar";
import Catalog from "./Components/Card";
import CatalogModal from "./Components/Modal";

function App() {
  const [catalogData, setcatalogData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    return setOpenModal(true);
  };

  const handleClose = () => {
    return setOpenModal(false)
  }

  useEffect(() => {
    const rngInt = [];

    for (let i = 0; i < 5; i++) {
      rngInt.push({ content: [] });

      for (let j = 0; j < 30; j++) {
        rngInt[i].content.push(String(j));
      }
    }

    setcatalogData(rngInt);
  }, []);

  return (
    <>
      <section id="catalog">
        <SearchBar catalogData={catalogData} />
        <Catalog catalogData={catalogData} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} />
      </section>
    </>
  );
}

export default App;
