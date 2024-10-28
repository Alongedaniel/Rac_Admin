import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import AddIcon from "../../../assets/icons/AddIcon";

const AddPropertyModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%, -50%)" }}
        width="450px"
        height="530px"
        borderRadius="28px"
        p="24px 30px"
        bgcolor="#FFFBFE"
      >
        <Typography
          fontSize={"24px"}
          color="#1C1B1F"
          fontWeight={400}
          mb="16px"
        >
          Add properties
        </Typography>
        <Typography
          fontSize={"14px"}
          color="#49454F"
          fontWeight={400}
          mb="30px"
        >
          You want more properties for the products to be procured, give it a
          label (name of the property) like size, color, e.t.c, and optionally
          the description of the property.
        </Typography>
        <Box display="flex" flexDirection="column" gap="30px">
          <TextField
            required
            id="item-url"
            sx={{ fontSize: "16px", color: "#1C1B1F" }}
            type="property"
            label="Property Label"
            // value={productName}
            // onChange={(e) => setProductName(e.target.value)}
            // fullWidth
            placeholder="What name is this property?"
            InputProps={{
              sx: {
                width: "240px",
                borderRadius: "20px", // Apply border radius to the input element
                height: "56px",
                borderColor: "#79747E",
                fontSize: "16px",
                color: "#1C1B1F",
              },
            }}
          />
          <TextField
            required
            id="prop-desc"
            sx={{ fontSize: "16px", color: "#1C1B1F" }}
            type="text"
            label="Property Description"
            // value={productName}
            // onChange={(e) => setProductName(e.target.value)}
            fullWidth
            multiline
            rows={3}
            maxRows={3}
            placeholder="Property Description"
            InputProps={{
              sx: {
                borderRadius: "20px", // Apply border radius to the input element
                borderColor: "#79747E",
                fontSize: "16px",
                color: "#1C1B1F",
              },
            }}
          />
        </Box>
        <Button
          startIcon={<AddIcon color="#6750A4" />}
          variant="text"
          sx={{
            mt: "10px",
            color: "#6750A4",
            width: "185px",
            height: "40px",
            // borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Add more properties
        </Button>
        <Box
          p="24px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="10px"
        >
          <Button
            onClick={onClose}
            variant="text"
            sx={{
              color: "#6750A4",
              width: "68px",
              height: "40px",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "159px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Add Properties
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddPropertyModal;
