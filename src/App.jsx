import { useEffect, useRef, useState } from "react";

import "./App.css";

import Filters from "./Components/filters";
import Catalog from "./Components/Catalog";
import CatalogModal from "./Components/Modal";
import Navbar from "./Components/Navbar";

import { aboutSection, contactSection } from "./styles/sectionStyles";
import About from "./Components/About";

import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { EmailSharp, LocationOnSharp, Phone } from "@mui/icons-material";

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

  // TODO
  // Improve responsivness of site
  // Create contact cards
  // Abstract contact cards to a separate component

  return (
    <>
      <Navbar sideNavRef={sideNavRef} />

      <section
        id="about"
        className="sections"
        style={aboutSection}
        ref={(el) => (sectionsRef.current[0] = el)}>
        <About />

        <picture>
          <img src="https://pngimg.com/d/industrial_worker_PNG11414.png" alt="construction worker" />
        </picture>
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
        <Card
          className="contact-card"
          sx={{ width: "345px", height: "250px", overflow: "visible", borderRadius: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              sx={{
                width: "80px",
                height: "80px",
                transform: "translate(0px, -35px)",
                border: "1px solid #daa520",
                backgroundImage: "linear-gradient(320deg, #f1c50e, #ff5b16)",
              }}
              aria-label="Email">
              <EmailSharp sx={{ color: "black" }} fontSize="large" />
            </Avatar>
          </Box>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              textTransform={"uppercase"}
              fontSize={"1.375rem"}
              lineHeight={1.1}
              fontWeight={400}
              fontFamily={"Montserrat"}>
              E-mail
            </Typography>
            <Typography fontFamily={"Open Sans"} marginY={"12px"}>
              Our team is here to assist you
            </Typography>
            <Typography>hey@ourcompany.com</Typography>
          </CardContent>
        </Card>

        <Card
          className="contact-card"
          sx={{ width: "345px", height: "250px", overflow: "visible", borderRadius: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              sx={{
                width: "80px",
                height: "80px",
                transform: "translate(0px, -35px)",
                border: "1px solid #daa520",
                backgroundImage: "linear-gradient(320deg, #f1c50e, #ff5b16)",
              }}
              aria-label="Email">
              <LocationOnSharp sx={{ color: "black" }} fontSize="large" />
            </Avatar>
          </Box>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              textTransform={"uppercase"}
              fontSize={"1.375rem"}
              lineHeight={1.1}
              fontWeight={400}
              fontFamily={"Montserrat"}>
              Office
            </Typography>
            <Typography fontFamily={"Open Sans"} marginY={"12px"}>
              Come and visit us at our headquarters.
            </Typography>
            <Typography>
              121 Rock Sreet, 21 Avenue,
              <br />
              Nowy Jork, NY 92103-9000
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="contact-card"
          sx={{ width: "345px", height: "250px", overflow: "visible", borderRadius: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              sx={{
                width: "80px",
                height: "80px",
                transform: "translate(0px, -35px)",
                border: "1px solid #daa520",
                backgroundImage: "linear-gradient(320deg, #f1c50e, #ff5b16)",
              }}
              aria-label="Email">
              <Phone sx={{ color: "black" }} fontSize="large" />
            </Avatar>
          </Box>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              textTransform={"uppercase"}
              fontSize={"1.375rem"}
              lineHeight={1.1}
              fontWeight={400}
              fontFamily={"Montserrat"}>
              Telephone
            </Typography>
            <Typography fontFamily={"Open Sans"} marginY={"12px"}>
              From Monday to Friday, from 8:00 AM to 5:00 PM
            </Typography>
            <Typography>+1 555 000-000</Typography>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default App;
