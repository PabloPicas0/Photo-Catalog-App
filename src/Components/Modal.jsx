import { Box, Card, CardActionArea, CardMedia, Fade, Grid, Grow, Modal } from "@mui/material";

import { useState } from "react";

import {
  modalCard,
  modalMainContent,
  modalBackdropFilter,
  modalSecondaryContent,
} from "../styles/modalStyles";

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
    <Modal open={openModal} onClose={handleClose} slotProps={modalBackdropFilter}>
      <Box className="disable-scroll" sx={modalMainContent}>
        <Fade in={openModal}>
          <Box sx={{ padding: "5px" }}>
            <Card sx={modalCard}>
              <CardMedia component={"img"} sx={{ height: 400 }} src={mainImage} />
            </Card>
          </Box>
        </Fade>

        <Grid container sx={{ padding: "15px" }} justifyContent={"center"} gap={3}>
          {modal.map((element, idx) => {
            return (
              <Grow key={idx} in={openModal} style={{ transformOrigin: "0 0 0" }}>
                <Grid item>
                  <Card sx={modalSecondaryContent}>
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
