import { Card, CardContent, Typography } from "@mui/material";


const MainCard = (props) => {
    return (
      <div className="wrapper">
        {props.autocomplete.map((element, idx) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={idx}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                  all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
}

export default MainCard;