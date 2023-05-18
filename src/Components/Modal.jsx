import { Box, Card, CardActionArea, CardMedia, Fade, Grid, Grow, Modal } from "@mui/material";

import { useState } from "react";

import { modalStyle, modalCard, modalMainContent } from "../styles/styledComponents";

const CatalogModal = (props) => {
  const { modal, openModal, handleClose } = props;

  const [mainImage, setMainImage] = useState(modal[0]);

  const handleImage = (element) => {
    setMainImage(element);
  };

  return (
    <Modal open={openModal} onClose={handleClose} sx={modalStyle}>
      <Box sx={modalMainContent}>
        <Fade in={openModal}>
          <Box sx={{ padding: "5px" }}>
            <Card sx={modalCard}>
              <CardMedia component={"img"} sx={{ height: 400 }} src={mainImage} />
            </Card>
          </Box>
        </Fade>

        <Grid container spacing={2} sx={{ padding: "15px 5px 5px 40px" }}>
          {modal.map((element, idx) => {
            return (
              <Grow key={idx} in={openModal} style={{ transformOrigin: "0 0 0" }}>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={() => handleImage(element)}>
                      <CardMedia component={"img"} sx={{ height: 70 }} src={element} />
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grow>
            );
          })}
        </Grid>
      </Box>
    </Modal>
  );
};

export default CatalogModal;
