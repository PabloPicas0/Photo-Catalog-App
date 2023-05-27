import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { useState } from "react";

import { dotStyle } from "../styles/styledComponents";

const Catalog = (props) => {
  const { catalogs, handleOpen } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = catalogs.map((element, idx) => {
    return (
      <Grid item key={idx}>
        <Card sx={{ maxWidth: 325 }}>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel porro dolores neque soluta illo
                optio ea beatae recusandae veritatis, alias maiores velit id necessitatibus, culpa nihil,
                praesentium pariatur amet sequi.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIdx) => {
    setCurrentIndex(slideIdx);
  };

  return (
    <div className="catalogs-wrapper">
      <button onClick={goToPrevious} className="slider-left-arrow">
        {"❰"}
      </button>
      <button onClick={goToNext} className="slider-right-arrow">
        {"❱"}
      </button>

      <div style={{ display: "flex", gap: "10px", overflowX: "hidden" }}>
        {sliders[currentIndex === 0 ? sliders.length - 1 : currentIndex - 1]}
        {sliders[currentIndex]}
        {sliders[currentIndex === sliders.length - 1 ? 0 : currentIndex + 1]}
      </div>

      <div className="dots-container">
        {sliders.map((slider, slideIdx) => {
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
