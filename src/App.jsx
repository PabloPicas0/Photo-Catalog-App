import { useEffect, useState } from "react";

import "./App.css";

import FilterBar from "./Components/filterBar";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";

function App() {
  // TODO:
  // Could be nice feture add padding in img to 16px on left right and mragin-top -80px
  const [catalogData, setCatalogData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const handleOpen = (element) => {
    console.log(catalogData);
    setModalContent(element.content);
    return setOpenModal(true);
  };

  const handleClose = () => {
    return setOpenModal(false);
  };

  useEffect(() => {
    const rngInt = [];
    const types = ["Hats", "Glasses", "Jacket", "Gloves", "Pants", "Shoes"];

    for (let i = 0; i < 6; i++) {
      rngInt.push({ content: [], catalog: `Catalog ${i}`, type: types[i] });

      for (let j = 0; j < 30; j++) {
        rngInt[i].content.push(String(j));
      }
    }

    setCatalogData(rngInt);
  }, []);

  return (
    <>
      <main id="catalogs">
        <FilterBar catalogData={catalogData} />
        <Catalog catalogData={catalogData} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} modalContent={modalContent} />
      </main>
    </>
  );
}

export default App;
