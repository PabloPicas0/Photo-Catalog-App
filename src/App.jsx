import { useEffect, useRef, useState } from "react";

import "./App.css";

import Filters from "./Components/filters";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import MediaBar from "./Components/MediaBar";

import { aboutSection, contactSection } from "./styles/styledComponents";

export const types = ["Hats", "Glasses", "Jacket", "Gloves", "Pants", "Shoes"];

function App() {
  const [data, setData] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [modal, setModal] = useState([]);
  const [filter, setFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

    const rng = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min) + min);
    };

    for (let i = 0; i < 10; i++) {
      rngInt.push({
        image: `https://picsum.photos/1920/1080?random=${i}`,
        content: [],
        catalog: `Catalog ${i}`,
        type: types[rng(0, 6)],
      });

      for (let j = 0; j < 30; j++) {
        rngInt[i].content.push(`https://picsum.photos/1920/1080?random=${Math.random()}`);
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
      <Navbar />

      <section id="about" className="catalogs" style={aboutSection}>
        Tu trzeba napisać coś o firmie, czym się zajmuje itp. Musi to być w miarę krótkie.
      </section>

      <section id="catalogs" className="catalogs">
        <Filters handleFilter={handleFilter} />
        <Catalog catalogs={catalogs} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} modal={modal} />
      </section>

      <section id="contact" className="catalogs" style={contactSection}>
        Sekcja z kontaktem. Możesz tu dać nwm nr telefonu, adress email czy obydwa albo jeszcze coś innego.
      </section>

      <MediaBar />
    </>
  );
}

export default App;
