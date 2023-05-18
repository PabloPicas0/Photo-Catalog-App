import { Avatar, Chip, Grid } from "@mui/material";

import { types } from "../App";

import { filterBorderRadius } from "../styles/styledComponents";

const Filters = (props) => {
  const { handleFilter } = props;

  return (
    <Grid container spacing={2} justifyContent={"center"} sx={{ margin: "0px" }}>
      {types.map((elem, idx) => {
        const letter = elem.split("");

        return (
          <Grid item key={idx}>
            <Chip
              key={idx}
              avatar={<Avatar>{letter[0]}</Avatar>}
              label={elem}
              sx={filterBorderRadius}
              color="warning"
              onClick={() => handleFilter(elem)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Filters;
