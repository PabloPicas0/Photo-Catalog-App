import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { ChevronLeftSharp, ChevronRightSharp } from "@mui/icons-material";

import { useRef } from "react";

import { carouselStyles } from "../styles/catalogsStyles";

const Catalog = (props) => {
  const { catalogs, handleOpen } = props;

  const carouselRef = useRef(null);

  const goToPrevious = () => {
    carouselRef.current.scrollLeft += -carouselRef.current.offsetWidth;
  };

  const goToNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const handleInfiniteScroll = () => {
    const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;

    if (scrollLeft === 0) {
      carouselRef.current.classList.add("no-transition");
      carouselRef.current.scrollLeft = scrollWidth - 2 * offsetWidth;
      carouselRef.current.classList.remove("no-transition");
    }

    if (Math.ceil(scrollLeft) === scrollWidth - offsetWidth) {
      carouselRef.current.classList.add("no-transition");
      carouselRef.current.scrollLeft = offsetWidth;
      carouselRef.current.classList.remove("no-transition");
    }
  };
  // TODO
  // Add on left side 3 last catalogs
  // Add on right side 3 first catalogs

  return (
    <div className="carousel-wrapper">
      <button onClick={goToPrevious} className="slider-left-arrow slider-arrow">
        <ChevronLeftSharp fontSize="large" className="slider-left-arrow-icon" />
      </button>
      <button onClick={goToNext} className="slider-right-arrow slider-arrow">
        <ChevronRightSharp fontSize="large" className="slider-right-arrow-icon" />
      </button>

      <Box onScroll={handleInfiniteScroll} className="carousel" sx={carouselStyles} ref={carouselRef}>
        {catalogs.map((element, idx) => {
          const { image, catalog } = element;

          return (
            <Card sx={{ scrollSnapAlign: "start" }} key={idx}>
              <CardActionArea onClick={() => handleOpen(element)}>
                <CardMedia
                  component={"img"}
                  sx={{ height: 140 }}
                  src={image}
                  title="Photo of the current catalog"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {catalog}
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
    </div>
  );
};

export default Catalog;
