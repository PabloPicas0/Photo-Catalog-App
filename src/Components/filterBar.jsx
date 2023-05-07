import { Avatar, Chip } from "@mui/material";

import { types } from "../App";

const Filters = (props) => {
  const borderRadius = { borderRadius: "5px" }

  return (
    <div className="filter-bar">
      {types.map((elem, idx) => {
        const letter = elem.split("");

        return (
          <Chip
            key={idx}
            avatar={<Avatar>{letter[0]}</Avatar>}
            label={elem}
            sx={borderRadius}
            onClick={() => props.handleFilter(elem)}
          />
        );
      })}
    </div>
  );
};

export default Filters;
