import { ButtonGroup, IconButton, Link } from "@mui/material";
import { FacebookSharp, Instagram, Twitter, YouTube } from "@mui/icons-material";

import { mediaBarLinksStyle, mediaBarStyle } from "../styles/styledComponents";

const MediaBar = () => {
  const incons = [
    <FacebookSharp className="social-link" />,
    <Twitter className="social-link" />,
    <Instagram className="social-link" />,
    <YouTube className="social-link" />,
  ];
  // Fix aria-label on InconButton
  return (
    <ButtonGroup variant="contained" aria-label=" primary button group" sx={mediaBarStyle}>
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
  );
};

export default MediaBar;
