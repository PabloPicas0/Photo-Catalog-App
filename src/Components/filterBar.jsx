import { Autocomplete, TextField } from "@mui/material";

const FilterBar = (props) => {
  return (
    <div id="filter-bar">
      <Autocomplete
        disablePortal
        id="Autocomplete"
        options={props.catalogData[0]?.content}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="filter" />}
      />
    </div>
  );
};

export default FilterBar;
