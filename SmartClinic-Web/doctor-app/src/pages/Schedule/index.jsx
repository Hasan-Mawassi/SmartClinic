import React from "react";
import ScheduleCard from "../../components/Schedule/ScheduleCard";
import ScheduleTable from "../../components/Schedule/ScheduleTable";
import { Box } from "@mui/material";
import CustomButton from "../../components/Basic/Button";
import { useState } from "react";
const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          p: 1,
         
          mt: 2,
        }}
      >
        <CustomButton
          label={"Add Schedule"}
          onClick={() => setIsModalOpen(true)}
          sx={{ width: "20%",  ml: 7,  }}
        />
      </Box>

      <ScheduleCard open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Box sx={{ p: 1 }}>
        <ScheduleTable />
      </Box>
    </>
  );
};

export default Schedule;
