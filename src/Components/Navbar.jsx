import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar component={"nav"} sx={{ backgroundColor: "transparent", backdropFilter: "blur(2px)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component={"div"}>
          LOGO
        </Typography>

        <Breadcrumbs aria-label="navigation" separator="">
          <Link underline="none" color={"white"} href="#about" className="link">
            About
          </Link>
          <Link underline="none" color={"white"} href="#catalogs" className="link">
            Catalogs
          </Link>
          <Link underline="none" color={"white"} href="#contact" className="link">
            Contact
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
