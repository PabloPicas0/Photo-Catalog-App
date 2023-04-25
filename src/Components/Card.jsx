import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const MainCard = (props) => {
  return (
    <div className="wrapper">
      {props.autocomplete.map((element, idx) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={idx}>
            <CardActionArea>
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
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                  all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default MainCard;
