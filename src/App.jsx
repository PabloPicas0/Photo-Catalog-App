import { useEffect, useRef, useState } from "react";

import "./App.css";

import Filters from "./Components/filters";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";
import Navbar from "./Components/Navbar";

import { aboutSection, contactSection } from "./styles/sectionStyles";
import About from "./Components/About";

export const types = ["Hats", "Glasses", "Jacket", "Gloves", "Pants", "Shoes"];

const rngInt = [];

const rng = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 20; i++) {
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

function App() {
  const [data, setData] = useState(rngInt);
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { current } = sectionsRef; // Destruct the ref object that have array of all sections

          const sideCounter = sideNavRef.current.querySelector("#counter"); // Pick element with number of current section
          const previousDot = sideNavRef.current.querySelector(".active-dot");
          const nextDot = sideNavRef.current.querySelector(`a[href='#${entry.target.id}']`);
          // Here just search array of all sections to get index of current intersecting element
          const currentSection = current.indexOf(entry.target);

          if (entry.isIntersecting) {
            sideCounter.textContent = `0${currentSection + 1}`; // If entry is intersecting change number of current section using its section index + 1

            previousDot?.classList.remove("active-dot");

            nextDot.classList.add("active-dot");
          }
        });
      },
      // IMPORTANT!!!
      // There is a bug where previous dot is active and next one not
      // But it shouldnt never be percived due to noone scrolls pixel by pixel
      { rootMargin: "-25% 0px -75% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar sideNavRef={sideNavRef} />

      <section
        id="about"
        className="sections"
        style={aboutSection}
        ref={(el) => (sectionsRef.current[0] = el)}>
        <About />
      </section>

      <section id="catalogs" className="sections" ref={(el) => (sectionsRef.current[1] = el)}>
        <Filters handleFilter={handleFilter} />
        <Catalog data={data} filter={filter} handleOpen={handleOpen} />
        <CatalogModal openModal={openModal} handleClose={handleClose} modal={modal} />
      </section>

      <section
        id="contact"
        className="sections"
        style={contactSection}
        ref={(el) => (sectionsRef.current[2] = el)}>
        <p style={{ textAlign: "center" }}>
          Sekcja z kontaktem. Możesz tu dać nwm nr telefonu, adress email czy obydwa albo jeszcze coś innego.
        </p>
      </section>
    </>
  );
}

export default App;
