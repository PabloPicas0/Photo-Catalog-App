import { useEffect, useState } from "react";

import "./App.css";

import FilterBar from "./Components/filterBar";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";

export const exampleImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1200px-Big_Floppa_and_Justin_2_%28cropped%29.jpg"

function App() {
  const [data, setData] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [modal, setModal] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("");

  const handleOpen = (element) => {
    setModal(element.content); // element passed is object from each catalog that fire whe user click
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleFilter = (type) => {
    setFilter((prev) => {
      if (prev === type) {
        return "";
      }

      return type;
    });
  };

  useEffect(() => {
    const rngInt = [];
    const types = ["Hats", "Glasses", "Jacket", "Gloves", "Pants", "Shoes"];

    const rng = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min) + min);
    };

    for (let i = 0; i < 24; i++) {
      rngInt.push({ content: [], catalog: `Catalog ${i}`, type: types[rng(0, 6)] });

      for (let j = 0; j < 30; j++) {
        rngInt[i].content.push(exampleImage);
      }
    }

    setData(rngInt);
    setCatalogs(rngInt);
  }, []);

  useEffect(() => {
    // This if statement prevents from runing the code on first app mount
    if (data.length !== 0) {
      setCatalogs((prev) => {
        const newCatalogs = filter === "" ? data : data.filter((elem) => elem.type === filter);

        return newCatalogs;
      });
    }
  }, [filter]);

  return (
    <>
      <section className="catalogs">
        <FilterBar handleFilter={handleFilter} />
        <Catalog catalogs={catalogs} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} modal={modal} />
      </section>
    </>
  );
}

export default App;
