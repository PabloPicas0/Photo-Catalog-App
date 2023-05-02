import { useEffect, useState } from "react";

import "./App.css";

import FilterBar from "./Components/filterBar";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";

export const types = ["Hats", "Glasses", "Jacket", "Gloves", "Pants", "Shoes"];

function App() {
  // TODO:
  // Could be nice feture add padding in img to 16px on left right and mragin-top -80px
  const [data, setData] = useState([]);
  const [modal, setModal] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (element) => {
    console.log(data);
    setModal(element.content);
    return setOpenModal(true);
  };

  const handleClose = () => {
    return setOpenModal(false);
  };

  useEffect(() => {
    const rngInt = [];

    const rng = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)

      return Math.floor(Math.random() * (max - min) + min)
    }

    for (let i = 0; i < 40; i++) {
      rngInt.push({ content: [], catalog: `Catalog ${i}`, type: types[rng(0, 5)] });

      for (let j = 0; j < 30; j++) {
        rngInt[i].content.push(String(j));
      }
    }

    setData(rngInt);
  }, []);

  return (
    <>
      <section className="catalogs">
        <FilterBar data={data} />
        <Catalog data={data} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} modal={modal} />
      </section>
    </>
  );
}

export default App;
