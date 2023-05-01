import { Box, Card, CardActionArea, CardMedia, Grid, Modal } from "@mui/material";

const modalMainContent = {
  maxWidth: 1200,
  margin: "0 auto",
};

const CatalogModal = (props) => {
  return (
    <Modal open={props.openModal} onClose={props.handleClose}>
      <Box sx={modalMainContent}>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quos? Adipisci nam corrupti, cumque,
          molestias, dolore expedita distinctio sapiente earum eos dolor debitis ipsum explicabo reiciendis
          quasi harum facere! Tempora?
        </Box>
        <Grid container spacing={2} justifyContent={"start"}>
          {props.modal.map((element, idx) => {
            return (
              <Grid item key={idx}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component={"img"}
                      sx={{ height: 70 }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1200px-Big_Floppa_and_Justin_2_%28cropped%29.jpg"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Modal>
  );
};

export default CatalogModal;
