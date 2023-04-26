import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Catalog = (props) => {
  return (
    <div className="wrapper">
      <Grid container spacing={2} justifyContent={"center"}>
        {props.catalogData.map((element, idx) => {
          return (
            <Grid item key={idx}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={props.handleOpen}>
                  <CardMedia
                    component={"img"}
                    sx={{ height: 140 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1200px-Big_Floppa_and_Justin_2_%28cropped%29.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
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
