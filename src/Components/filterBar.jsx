import { Avatar, Chip } from "@mui/material";

const FilterBar = () => {
  const borderRadius = { borderRadius: "5px" }

  return (
    <div className="filter-bar">
      <div className="center">
        <Chip avatar={<Avatar>{"H"}</Avatar>} label={"Hats"} sx={borderRadius} />
      </div>
      <div className="center">
        <Chip avatar={<Avatar>{"G"}</Avatar>} label={"Glasses"} sx={borderRadius} />
        <Chip avatar={<Avatar>{"J"}</Avatar>} label={"Jacket"} sx={borderRadius} />
      </div>
      <div className="center">
        <Chip avatar={<Avatar>{"G"}</Avatar>} label={"Gloves"} sx={borderRadius} />
        <Chip avatar={<Avatar>{"P"}</Avatar>} label={"Pants"} sx={borderRadius} />
        <Chip avatar={<Avatar>{"S"}</Avatar>} label={"Shoes"} sx={borderRadius} />
      </div>
    </div>
  );
};

export default FilterBar;
