import { Autocomplete, TextField } from "@mui/material";

const SearchBar = (props) => {
  return (
    <nav id="search-bar">
      <Autocomplete
        disablePortal
        id="Autocomplete"
        options={props.catalogData[0]?.content}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </nav>
  );
};

export default SearchBar;
