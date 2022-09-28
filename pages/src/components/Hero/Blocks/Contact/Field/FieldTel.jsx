import React from "react";
import TextField from "@mui/material/TextField";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";

function FieldTel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
      <WhatsAppIcon sx={{ color: "#d3fc00" }} />
      <TextField
        id="standard-textarea"
        label="Ваш номер"
        placeholder="Введите номер"
        type="number"
        variant="standard"
        {...props}
      
      />
    </Box>
  );
}

export default FieldTel;
