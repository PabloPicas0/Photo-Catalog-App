import { Box, Card, CardActionArea, CardMedia, Fade, Grid, Grow, Modal } from "@mui/material";

import { useState } from "react";

import { modal, modalCard } from "../styles/styledComponents";

const modalMainContent = {
  maxWidth: 1200,
  margin: "0 auto",
};

const CatalogModal = (props) => {
  const [mainImage, setMainImage] = useState(props.modal[0]);

  const handleImage = (element) => {
    setMainImage(element);
  };

  return (
    <Modal
      open={props.openModal}
      onClose={props.handleClose}
      sx={modal}>
      <Box sx={modalMainContent}>
        <Fade in={props.openModal}>
          <Box sx={{ padding: "5px" }}>
            <Card sx={modalCard}>
              <CardMedia component={"img"} sx={{ height: 400 }} src={mainImage} />
            </Card>
          </Box>
        </Fade>
        <Grid container spacing={2} sx={{ padding: "15px 5px 5px 40px" }}>
          {props.modal.map((element, idx) => {
            return (
              <Grow key={idx} in={props.openModal} style={{ transformOrigin: "0 0 0" }}>
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
