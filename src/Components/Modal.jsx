import { Box, Grid, Modal } from "@mui/material";

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
      </Box>
    </Modal>
  );
};

export default CatalogModal;
