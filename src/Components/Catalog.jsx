import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Catalog = (props) => {
  return (
    <div className="catalogs-wrapper">
      <Grid container spacing={2} justifyContent={"center"}>
        {props.data.map((element, idx) => {
          return (
            <Grid item key={idx}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => props.handleOpen(element)}>
                  <CardMedia
                    component={"img"}
                    sx={{ height: 140 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1200px-Big_Floppa_and_Justin_2_%28cropped%29.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Catalog ${idx}`}
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
