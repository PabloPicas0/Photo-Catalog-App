import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { exampleImage } from "../App";

const Catalog = (props) => {
  return (
    <div className="catalogs-wrapper">
      <Grid container spacing={2} justifyContent={"center"}>
        {props.catalogs.map((element, idx) => {
          return (
            <Grid item key={idx}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => props.handleOpen(element)}>
                  <CardMedia
                    component={"img"}
                    sx={{ height: 140 }}
                    src={exampleImage}
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
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Catalog;
