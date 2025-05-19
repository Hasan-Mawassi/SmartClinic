import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import InputField from "../../Basic/inputField";
import CustomButton from "../../Basic/Button";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { addMedicine } from "../../../Services/apis/addPrescription";
import { useSelector, useDispatch } from "react-redux";
import { setNewMedicine } from "../../../redux/Slices/patientDataSlice";

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

export default function MedicineModal({ open, onClose }) {
  const [form, setForm] = useState({
    medicineName: "",
    frequency: "",
    quantity: "",
    duration: "",
  });
  const dispatch = useDispatch();
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };
  const patientId =  useSelector((state)=> state.patientData.patientId);
   const doctorId = useSelector((state) => state.doctorInfo.id)
  const handleSave = async () => {
    try {
      const data = {
        medicineName: form.medicineName,
        frequency: form.frequency,
        quantity: form.quantity,
        duration: form.duration,
        patientId:patientId,
        doctorId,
      };
      dispatch(setNewMedicine(form.medicineName))
      await addMedicine(data);
     setForm({
    medicineName: "",
    frequency: "",
    quantity: "",
    duration: "",
  })
      onClose(); 
    } catch (error) {
      console.log(error)
    }
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
            type="text"
             value={form.medicineName}
            onChange={handleChange("medicineName")}
            variant="outlined"
            fullWidth={true}
          />
          <InputField
            inputLabel="Frequency"
            placeholder="Enter frequency per day"
            type="text"
             value={form.frequency}
            onChange={handleChange("frequency")}
            variant="outlined"
            fullWidth={true}
          />
          <InputField
            inputLabel="Quantity"
            placeholder="Enter quantity"
            type="text"
             value={form.quantity}
            onChange={handleChange("quantity")}
            variant="outlined"
            fullWidth={true}
          />
          <InputField
            inputLabel="Duration"
            placeholder="Enter medicine duration"
            type="text"
             value={form.duration}
            onChange={handleChange("duration")}
            variant="outlined"
            fullWidth={true}
          />
          <Box  justifySelf={'center'}>

          <CustomButton label={"Save"}onClick={handleSave}  sx={{ mt: 2 }}  />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
