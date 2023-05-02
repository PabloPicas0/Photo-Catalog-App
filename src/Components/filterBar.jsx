import { Avatar, Chip } from "@mui/material";
import { types } from "../App";

const FilterBar = (props) => {
  return (
    <div className="filter-bar">
      {types.map((elem, idx) => {
        const letter = elem.split("")

        return (
          <Chip key={idx} avatar={<Avatar>{letter[0]}</Avatar>} label={elem}/>
        )
      })}
    </div>
  );
};

export default FilterBar;
