import { Avatar, Chip, Grid } from "@mui/material";

import { types } from "../App";

import { filterElementStyles, filterWrapperStyles } from "../styles/filterStyles";

const Filters = (props) => {
  const { handleFilter } = props;

  return (
    <Grid container justifyContent={"center"} sx={{ margin: "0px" }} width={"auto"}>
      {types.map((elem, idx) => {
        const letter = elem.split("");

        return (
          <Grid item key={idx} sx={filterWrapperStyles}>
            <Chip
              key={idx}
              avatar={<Avatar>{letter[0]}</Avatar>}
              label={elem}
              sx={filterElementStyles}
              onClick={() => handleFilter(elem)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Filters;
