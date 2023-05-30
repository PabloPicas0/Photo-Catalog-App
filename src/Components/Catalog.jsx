import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { ChevronLeftSharp, ChevronRightSharp } from "@mui/icons-material";

import { useRef, useState } from "react";

import { carouselStyles, dotStyle } from "../styles/catalogsStyles";

const Catalog = (props) => {
  const { catalogs, handleOpen } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? catalogs.length - 1 : currentIndex - 1;

    carouselRef.current.scrollLeft += -carouselRef.current.offsetWidth;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === catalogs.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIdx) => {
    setCurrentIndex(slideIdx);
  };

  return (
    <div className="carousel-wrapper">
      <button onClick={goToPrevious} className="slider-left-arrow slider-arrow">
        <ChevronLeftSharp fontSize="large" className="slider-left-arrow-icon" />
      </button>
      <button onClick={goToNext} className="slider-right-arrow slider-arrow">
        <ChevronRightSharp fontSize="large" className="slider-right-arrow-icon" />
      </button>

      <Box sx={carouselStyles} ref={carouselRef}>
        {catalogs.map((element, idx) => {
          return (
            <Card key={idx}>
              <CardActionArea onClick={() => handleOpen(element)}>
                <CardMedia
                  component={"img"}
                  sx={{ height: 140 }}
                  src={element.image}
                  title="Photo of the current catalog"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.catalog}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel porro dolores neque soluta
                    illo optio ea beatae recusandae veritatis, alias maiores velit id necessitatibus, culpa
                    nihil, praesentium pariatur amet sequi.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>

      <div className="carousel-dots-container">
        {catalogs.map((_, slideIdx) => {
          return (
            <div
              key={slideIdx}
              style={{
                ...dotStyle,
                backgroundColor: `${currentIndex === slideIdx ? "#fff" : "transparent"}`,
              }}
              onClick={() => goToSlide(slideIdx)}></div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
