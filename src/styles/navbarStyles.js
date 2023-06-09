// Navbar styles section

export const appBarStyle = {
  backgroundColor: "transparent",
  padding: "20px 6vw",
  boxShadow: "none",
  textTransform: "uppercase",
  pointerEvents: "none",
};

export const appBarLinks = {
  display: { sm: "flex", xs: "none" },
  pointerEvents: "auto",
};

export const appBarIcon = {
  color: "rgba(255, 255, 255, 0.87);",
  display: { xs: "inline-flex", sm: "none" },
  pointerEvents: "auto",
};

export const navigationContainer = {
  position: "relative",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.87)",
  gap: "40px",
  overflow: "hidden"
};

export const navigationContent = {
  fontSize: "2.5rem",
  fontWeight: 500,
  color: "whitesmoke",
};

export const closeNavigationIcon = {
  color: "goldenrod",
};

// Bar with social media styles section

export const mediaBarStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  marginBottom: "50px",
  paddingLeft: "5%",
  boxShadow: "none",
  display: { xs: "none", lg: "inline-flex" },
  pointerEvents: "none",
};

export const mediaBarLinksStyle = {
  color: "rgba(218, 165, 32, 0.87)",
  pointerEvents: "auto",
};

// Side navigation styles section

export const sideNavigation = {
  display: { xs: "none", lg: "flex" },
};

export const sideNavLink = {
  display: "block",
  borderRadius: "50%",
  border: "1px solid rgba(218, 165, 32, 0.87)",
  backgroundColor: "transparent",
  margin: "10px 0px",
  padding: "5px",
};

export const pageNumber = {
  margin: "0px 21px 0px 45px",
  color: "rgba(218, 165, 32, 0.87)",
  pointerEvents: "none",
};
