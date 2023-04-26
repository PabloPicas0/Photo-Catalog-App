import { Box, Modal } from "@mui/material";

const CatalogModal = (props) => {
  return (
    <Modal open={props.openModal} onClose={props.handleClose}>
      <Box>hey</Box>
    </Modal>
  );
};

export default CatalogModal;
