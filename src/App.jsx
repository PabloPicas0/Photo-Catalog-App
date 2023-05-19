import { useEffect, useRef, useState } from "react";

import "./App.css";

import Filters from "./Components/filters";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import MediaBar from "./Components/MediaBar";

import { aboutSection, catalogsSection, contactSection } from "./styles/styledComponents";

export const types = ["Hats", "Glasses", "Jacket", "Gloves", "Pants", "Shoes"];

function App() {
  const [data, setData] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [modal, setModal] = useState([]);
  const [filter, setFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const sectionsRef = useRef([]);
  const sideNavRef = useRef(null);

  const handleOpen = (element) => {
    const { content } = element;
    
    setModal(content); // element passed is object from each catalog that fire whe user click
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { current } = sectionsRef; // Destruct the ref object that have array of all sections

          const sideCounter = sideNavRef.current.querySelector("#counter"); // Pick element with number of current section
          const sideDot = sideNavRef.current.querySelector(`a[href='#${entry.target.id}']`);

          // Here just search array of all sections to get index of current intersecting element
          const currentSection = current.indexOf(entry.target);

          if (entry.isIntersecting) {
            sideCounter.textContent = `0${currentSection + 1}`; // If entry is intersecting change number of current section using its section index + 1
            sideDot.classList.add("active-dot");
          } else {
            sideDot.classList.remove("active-dot");
          }
        });
      },
      // IMPORTANT!!!
      // Each section should have at least 5px of margin top
      // To prevent the bug where two section were intersecting at the same time  
      { threshold: 0.45 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
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
      <Navbar sideNavRef={sideNavRef} />

      <section
        id="about"
        className="catalogs"
        style={aboutSection}
        ref={(el) => (sectionsRef.current[0] = el)}>
        Tu trzeba napisać coś o firmie, czym się zajmuje itp. Musi to być w miarę krótkie.
      </section>

      <section id="catalogs" style={catalogsSection} className="catalogs" ref={(el) => (sectionsRef.current[1] = el)}>
        <Filters handleFilter={handleFilter} />
        <Catalog catalogs={catalogs} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} modal={modal} />
      </section>

      <section
        id="contact"
        className="catalogs"
        style={contactSection}
        ref={(el) => (sectionsRef.current[2] = el)}>
        Sekcja z kontaktem. Możesz tu dać nwm nr telefonu, adress email czy obydwa albo jeszcze coś innego.
      </section>

      <MediaBar />
    </>
  );
}

export default App;
