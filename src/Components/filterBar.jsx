import { Avatar, Chip } from "@mui/material";

const FilterBar = (props) => {
  return (
    <div id="filter-bar">
      {props.data.map((elem, idx) => {
        const letter = elem.type.split("")

        return (
          <Chip key={idx} avatar={<Avatar>{letter[0]}</Avatar>} label={elem.type}/>
        )
      })}
    </div>
  );
};

export default FilterBar;
