import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TotalFiyat() {
  const amount = useSelector((state) => state.coursesShop.totalAmount);

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "20px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Gölgelendirme
        borderRadius: "10px",
      }} // Köşe yumuşatma
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Sepete Toplam Fiyat : {amount} TL
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalFiyat;
