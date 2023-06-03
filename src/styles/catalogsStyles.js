export const carouselStyles = {
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: { xs: "100%", sm: "calc((100% / 2) - 9px)", lg: "calc((100% / 3) - 12px)" },
  gap: { xs: "10px", sm: "16px" },
  overflowX: "scroll",
  scrollBehavior: "smooth",
  scrollSnapType: "x mandatory",
};