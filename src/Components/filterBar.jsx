import { Avatar, Chip } from "@mui/material";

const FilterBar = (props) => {
  const borderRadius = { borderRadius: "5px" }

  return (
    <div className="filter-bar">
      <div className="center">
        <Chip
        className="Hats"
          avatar={<Avatar>{"H"}</Avatar>}
          label={"Hats"}
          sx={borderRadius}
          onClick={() => props.handleFilter("Hats")}
        />
      </div>
      <div className="center">
        <Chip
          avatar={<Avatar>{"G"}</Avatar>}
          label={"Glasses"}
          sx={borderRadius}
          onClick={() => props.handleFilter("Glasses")}
        />
        <Chip
          avatar={<Avatar>{"J"}</Avatar>}
          label={"Jacket"}
          sx={borderRadius}
          onClick={() => props.handleFilter("Jacket")}
        />
      </div>
      <div className="center">
        <Chip
          avatar={<Avatar>{"G"}</Avatar>}
          label={"Gloves"}
          sx={borderRadius}
          onClick={() => props.handleFilter("Gloves")}
        />
        <Chip
          avatar={<Avatar>{"P"}</Avatar>}
          label={"Pants"}
          sx={borderRadius}
          onClick={() => props.handleFilter("Pants")}
        />
        <Chip
          avatar={<Avatar>{"S"}</Avatar>}
          label={"Shoes"}
          sx={borderRadius}
          onClick={() => props.handleFilter("Shoes")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
