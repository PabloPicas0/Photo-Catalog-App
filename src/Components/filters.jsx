import { Avatar, Chip, Grid } from "@mui/material";

import { types } from "../App";

const Filters = (props) => {
  const borderRadius = { borderRadius: "5px", border: "1px solid white" };

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {types.map((elem, idx) => {
        const letter = elem.split("");

        return (
          <Grid item>
            <Chip
              key={idx}
              avatar={<Avatar>{letter[0]}</Avatar>}
              label={elem}
              sx={borderRadius}
              color="warning"
              onClick={() => props.handleFilter(elem)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Filters;
