import { Autocomplete, TextField } from "@mui/material";

const FilterBar = (props) => {
  return (
    <div id="search-bar">
      <Autocomplete
        disablePortal
        id="Autocomplete"
        options={props.catalogData[0]?.content}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </div>
  );
};

export default FilterBar;
