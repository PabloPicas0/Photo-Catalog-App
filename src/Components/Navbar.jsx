import { MenuOutlined, FacebookSharp, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
  AppBar,
  Breadcrumbs,
  IconButton,
  Link,
  Toolbar,
  Menu,
  MenuItem,
  Box,
  ButtonGroup,
  Switch,
} from "@mui/material";

import {
  appBarIcon,
  appBarLinks,
  appBarStyle,
  mediaBarLinksStyle,
  mediaBarStyle,
  pageNumber,
  sideNavLink,
  sideNavigation,
} from "../styles/styledComponents";

import { useEffect, useState } from "react";

const Navbar = (props) => {
  const { sideNavRef } = props;

  const [openNav, setOpenNav] = useState(null);
  const [switchBackground, setSwitchBackground] = useState(false);

  const links = ["About", "Catalogs", "Contact"];
  const incons = [
    <FacebookSharp className="social-link" />,
    <Twitter className="social-link" />,
    <Instagram className="social-link" />,
    <YouTube className="social-link" />,
  ];

  const handleOpenNav = (event) => {
    setOpenNav(event.currentTarget);
  };

  const handleCloseNav = () => {
    setOpenNav(null);
  };

  const handleBackground = () => {
    setSwitchBackground((prev) => !prev);
  };

  useEffect(() => {
    const bg1 = "/Photo-Catalog-App/Images/cegła.jpg";
    const bg2 = "/Photo-Catalog-App/Images/cegła2x3.jpg";
    const body = document.querySelector("body").style

    switchBackground === false ? body.backgroundImage = `url(${bg1})` : body.backgroundImage = `url(${bg2})`
  }, [switchBackground])

  return (
    <>
      <AppBar component={"nav"} sx={appBarStyle}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link variant="h6" href="/Photo-Catalog-App/" underline="none" sx={mediaBarLinksStyle}>
            <img src="/Photo-Catalog-App/Images/lgg.png" />
          </Link>

          <Switch onChange={handleBackground} color="warning" defaultChecked />

          {/* Desktop version */}
          <Breadcrumbs aria-label="navigation" separator="" sx={appBarLinks}>
            {links.map((link) => {
              const anhor = link.toLowerCase();

              return (
                <Link key={link} underline="none" href={`#${anhor}`} className="link">
                  {link}
                </Link>
              );
            })}
          </Breadcrumbs>

          {/* Mobile version */}
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

      {/* Side navigation */}
      <Box component={"nav"} className="side-navigation" sx={sideNavigation} ref={sideNavRef}>
        <Box sx={pageNumber}>
          <span id="counter">01</span>
          <div className="div-block"></div>
          <span>03</span>
        </Box>

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

      {/* Social media links */}
      <ButtonGroup variant="contained" aria-label="primary button group" sx={mediaBarStyle}>
        {incons.map((icon, idx) => {
          return (
            <Link href="https://www.facebook.com/adam.pytel.501" target="_blank" key={idx}>
              <IconButton size="large" aria-label="YouTube" sx={mediaBarLinksStyle}>
                {icon}
              </IconButton>
            </Link>
          );
        })}
      </ButtonGroup>
    </>
  );
};

export default Navbar;
