import React, { useEffect } from "react";
import { courseItems } from "../Data/CourseData";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CourseItem from "./CourseItem";
import { useSelector, useDispatch } from "react-redux";
import { totalAmount } from "./CourseShopSlice";
import Box from "@mui/material/Box";
import TotalFiyat from "./TotalFiyat";

function CourseList() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.coursesShop.courses);
  useEffect(() => {
    dispatch(totalAmount());
  }, [count]);
  return (
    <Container
      maxWidth="xl"
      sx={{
        margin: 2,
        height: "85vh",

        justifyContent: "center",
      }}
    >
      <Stack
        sx={{ display: "flex", justifyContent: "center" }}
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
      >
        {courseItems.map((item) => {
          const result = count.find((kurs) => kurs.id === item.id);
          return result ? (
            <CourseItem key={item.id} item={item} sayi={result.quantity} />
          ) : (
            <CourseItem key={item.id} item={item} sayi={0} />
          );
        })}
      </Stack>
      <Box
        sx={{
          width: "auto",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 10,
        }}
      ></Box>
    </Container>
  );
}

export default CourseList;
