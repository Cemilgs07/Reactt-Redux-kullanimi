import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box 
      component="section"
      sx={{
        p: 2,
        justifyContent: "center",
        display: "flex",
        color: "gray",
      }}
    >
      Cemil Kutluca Copyright © 2020 Tüm Hakları Saklıdır.{" "}
    </Box>
  );
}

export default Footer;
