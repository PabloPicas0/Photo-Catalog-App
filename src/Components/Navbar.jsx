import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Breadcrumbs, IconButton, Link, Toolbar, Menu, MenuItem, Box } from "@mui/material";

import {
  appBarIcon,
  appBarLinks,
  appBarStyle,
  pageNumber,
  sideNavLink,
  sideNavigation,
} from "../styles/styledComponents";

import { useState } from "react";

const Navbar = (props) => {
  const [openNav, setOpenNav] = useState(null);

  const links = ["About", "Catalogs", "Contact"];

  const handleOpenNav = (event) => {
    setOpenNav(event.currentTarget);
  };

  const handleCloseNav = () => {
    setOpenNav(null);
  };

  return (
    <>
      <AppBar component={"nav"} sx={appBarStyle}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link variant="h6" href="/" underline="none" color={"white"}>
            LOGO
          </Link>

          <Breadcrumbs aria-label="navigation" separator="" sx={appBarLinks}>
            {links.map((link) => {
              const anhor = link.toLowerCase();

              return (
                <Link key={link} underline="none" color={"white"} href={`#${anhor}`} className="link">
                  {link}
                </Link>
              );
            })}
          </Breadcrumbs>

          <IconButton size="large" aria-label="open-navigation" onClick={handleOpenNav} sx={appBarIcon}>
            <MenuOutlined />
          </IconButton>

          <Menu id="nav-menu" anchorEl={openNav} keepMounted open={Boolean(openNav)} onClose={handleCloseNav}>
            {links.map((link) => {
              const anhor = link.toLowerCase();

              return (
                <MenuItem key={link} onClick={handleCloseNav}>
                  <Link textAlign={"center"} underline="none" color={"black"} href={`#${anhor}`}>
                    {link}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </AppBar>

      <Box component={"nav"} className="side-navigation" sx={sideNavigation}>
        <Link underline="none" sx={pageNumber} href="#contact">
          <span>01</span>
          <div className="div-block"></div>
          <span>03</span>
        </Link>

        <div>
          {links.map((link) => {
            const anhor = link.toLowerCase();

            return (
              <Link
                textAlign={"center"}
                underline="none"
                href={`#${anhor}`}
                sx={sideNavLink}
                key={link}></Link>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default Navbar;
