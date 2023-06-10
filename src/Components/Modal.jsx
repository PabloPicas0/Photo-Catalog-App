import { Box, Card, CardActionArea, CardMedia, Fade, Grid, Grow, IconButton, Modal, ThemeProvider, createTheme } from "@mui/material";

import { useState } from "react";

import {
  modalCard,
  modalContent,
  modalBackdropFilter,
  modalSecondaryContent,
  modalSecondaryContentContainer,
  closeModalIcon,
} from "../styles/modalStyles";
import { Close } from "@mui/icons-material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1210,
      xl: 1536,
    },
  },
});

const CatalogModal = (props) => {
  const { modal, openModal, handleClose } = props;

  const [mainImage, setMainImage] = useState("");
  const [prevModal, setPrevModal] = useState(modal);

  if (modal !== prevModal) {
    setPrevModal(modal);
    setMainImage(modal[0]);
  }

  const handleImage = (element) => {
    setMainImage(element);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={openModal} onClose={handleClose} slotProps={modalBackdropFilter}>
        <Box className="disable-scroll-bar" sx={modalContent}>
          <Fade in={openModal}>
            <Box sx={{ padding: "5px" }}>
              <Card sx={modalCard}>
                <IconButton
                  onClick={handleClose}
                  size="large"
                  aria-label="close-modal"
                  sx={closeModalIcon}>
                  <Close />
                </IconButton>
                
                <CardMedia component={"img"} sx={{ height: 400 }} src={mainImage} alt="Main image" />
              </Card>
            </Box>
          </Fade>

          <Grid
            container
            className="disable-scroll-bar"
            sx={modalSecondaryContentContainer}
            justifyContent={"center"}
            gap={3}>
            {modal.map((element, idx) => {
              return (
                <Grow key={idx} in={openModal} style={{ transformOrigin: "0 0 0" }}>
                  <Grid item>
                    <Card sx={modalSecondaryContent}>
                      <CardActionArea onClick={() => handleImage(element)}>
                        <CardMedia component={"img"} sx={{ height: 70 }} src={element} alt="Secondary images"/>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grow>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default CatalogModal;
