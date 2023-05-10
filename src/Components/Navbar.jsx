import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar component={"nav"} sx={{backgroundColor: "transparent"}}>
      <Toolbar sx={{justifyContent: "space-between"}}>
        <Typography variant="h6" component={"div"}>
          LOGO
        </Typography>

        <Breadcrumbs aria-label="navigation" separator="">
          <Link underline="hover" color={"white"} href="#about">
            About
          </Link>
          <Link underline="hover" color={"white"} href="#catalogs">
            Catalogs
          </Link>
          <Link underline="hover" color={"white"} href="#contact">
            Contact
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
