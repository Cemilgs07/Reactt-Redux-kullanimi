import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useDispatch } from "react-redux";
import { increment } from "./CourseShopSlice";
import { decrement } from "./CourseShopSlice";
import { useSelector } from "react-redux";
function CourseItem({ item, sayi }) {
  const dispatch = useDispatch();
  const HandleClickRemove = () => {
    dispatch(decrement(item));
  };
  const HandleClickAdd = () => {
    dispatch(increment(item));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.img} // URL resim kaynağı
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title.toUpperCase()}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
        </Typography>
        <p style={{ marginTop: 10 }}>
          <strong> Kurs Satış Fiyatı :</strong> {item.price}
        </p>
      </CardContent>
      <CardActions>
        <Button onClick={HandleClickAdd} variant="contained" size="small">
          Ekle
        </Button>
        <p>Sepetteki Adet : {sayi} </p>
        {sayi > 0 ? (
          <Button onClick={HandleClickRemove} variant="contained" size="small">
            çıkar
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}

export default CourseItem;
