import { Avatar, Chip } from "@mui/material";

const FilterBar = (props) => {
  return (
    <div id="filter-bar">
      {props.catalogData.map(elem => {
        const letter = elem.type.split("")
        
        return (
          <Chip avatar={<Avatar>{letter[0]}</Avatar>} label={elem.type}/>
        )
      })}
    </div>
  );
};

export default FilterBar;
