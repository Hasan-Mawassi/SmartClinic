import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import InputField from "../../Basic/inputField";
import CustomButton from "../../Basic/Button";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function MedicineModal({ open, onClose ,onSaveClick}) {
  const [form, setForm] = useState({
    medicineName: "",
    frequency: "",
    quantity: "",
    duration: "",
  });
  
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" component="h2" textAlign={"center"}>
          Add New Medicine
        </Typography>
        <Box srx={{ display: "flex", gap: 3, mt: 2 }}>
          <InputField
            inputLabel="Medicine"
            placeholder="Enter Medicine name"
            type="email"
            variant="outlined"
            fullWidth={true}
          />
          <InputField
            inputLabel="Frequency"
            placeholder="Enter frequency per day"
            type="text"
            variant="outlined"
            fullWidth={true}
          />
          <InputField
            inputLabel="Quantity"
            placeholder="Enter quantity"
            type="text"
            variant="outlined"
            fullWidth={true}
          />
          <InputField
            inputLabel="Duration"
            placeholder="Enter medicine duration"
            type="text"
            variant="outlined"
            fullWidth={true}
          />
          <Box  justifySelf={'center'}>

          <CustomButton label={"Save"} onClick={onSaveClick} sx={{ mt: 2 }}  />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
