import { MenuOutlined, FacebookSharp, Instagram, Twitter, YouTube, CloseSharp } from "@mui/icons-material";
import {
  AppBar,
  Breadcrumbs,
  IconButton,
  Link,
  Toolbar,
  Box,
  ButtonGroup,
  Dialog,
  Collapse,
} from "@mui/material";

import {
  appBarIcon,
  navigationContainer,
  navigationContent,
  appBarLinks,
  appBarStyle,
  mediaBarLinksStyle,
  mediaBarStyle,
  pageNumber,
  sideNavLink,
  sideNavigation,
  closeNavigationIcon,
} from "../styles/navbarStyles";

import { useRef, useState } from "react";

let didInit = false;

const Navbar = (props) => {
  const { sideNavRef } = props;

  const [openDesktopNav, setOpenDesktopNav] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const openMobileNavigation = useRef(null);
  const closeMobileNavigation = useRef(null);

  const links = ["About", "Catalogs", "Contact"];
  const incons = [
    <FacebookSharp key={"F"} className="social-link" />,
    <Twitter key={"T"} className="social-link" />,
    <Instagram key={"I"} className="social-link" />,
    <YouTube key={"Y"} className="social-link" />,
  ];

  const handleOpenNav = () => {
    // Run Only once at first click align close btn with hamburger btn
    if (!didInit) {
      didInit = true;

      const { top, left } = openMobileNavigation.current.getBoundingClientRect();

      closeMobileNavigation.current.style.position = "absolute";
      closeMobileNavigation.current.style.top = `${top}px`;
      closeMobileNavigation.current.style.left = `${left}px`;
    }

    setOpenMobileNav(true);
  };

  const handleCloseNav = () => {
    setOpenMobileNav(false);
  };

  return (
    <>
      <AppBar component={"nav"} sx={appBarStyle}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            variant="h6"
            href="/Photo-Catalog-App/"
            underline="none"
            sx={{ ...mediaBarLinksStyle, display: "flex", alignItems: "center", marginTop: "5px" }}>
            <img alt="sma logo" title="Logo of the site" src="/Photo-Catalog-App/Images/lgg.png" />
          </Link>

          {/* Desktop version */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            <Collapse
              in={openDesktopNav}
              orientation="horizontal"
              sx={{ marginRight: "20px" }}
              classes={{ wrapper: "colapse-wrapper", wrapperInner: "colapse-wrapper-inner" }}>
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
            </Collapse>

            <IconButton
              size="large"
              aria-label="open-navigation"
              sx={{ pointerEvents: "auto" }}
              onClick={() => setOpenDesktopNav((prev) => !prev)}>
              <MenuOutlined htmlColor="white" />
            </IconButton>
          </Box>

          {/* Mobile version */}
          <IconButton
            ref={openMobileNavigation}
            size="large"
            aria-label="open-navigation"
            onClick={handleOpenNav}
            sx={appBarIcon}>
            <MenuOutlined />
          </IconButton>

          <Dialog id="nav-menu" fullScreen keepMounted open={openMobileNav} onClose={handleCloseNav}>
            <Box sx={navigationContainer}>
              <IconButton
                ref={closeMobileNavigation}
                size="large"
                aria-label="close-navigation"
                onClick={handleCloseNav}
                sx={closeNavigationIcon}>
                <CloseSharp />
              </IconButton>

              {links.map((link) => {
                const anhor = link.toLowerCase();

                return (
                  <Link
                    key={link}
                    textAlign={"center"}
                    sx={navigationContent}
                    underline="none"
                    color={"black"}
                    href={`#${anhor}`}
                    onClick={handleCloseNav}>
                    {link}
                  </Link>
                );
              })}

              <ButtonGroup
                variant="contained"
                aria-label="primary button group"
                sx={{ gap: "30px", boxShadow: "none", position: "absolute", bottom: 5 }}>
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
            </Box>
          </Dialog>
        </Toolbar>
      </AppBar>

      {/* Side navigation */}
      <Box component={"aside"} className="side-navigation" sx={sideNavigation} ref={sideNavRef}>
        <Box sx={pageNumber}>
          <span id="counter">01</span>
          <div className="div-block"></div>
          <span>03</span>
        </Box>

        <div>
          {links.map((link, idx) => {
            const anhor = link.toLowerCase();

            return (
              <Link
                title={`Dot redirecting to section nr ${idx + 1}`}
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
