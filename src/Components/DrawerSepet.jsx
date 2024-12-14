import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "@mui/material/Button";
import { totalAmount } from "./CourseShopSlice";

function DrawerSepet() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalCourse = useSelector((state) => {
    return state.coursesShop.totalCourse;
  });

  const Courses = useSelector((state) => {
    return state.coursesShop.courses;
  });
  const totalAmount = useSelector((state) => {
    return state.coursesShop.totalAmount;
  });
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  useEffect(() => {}, [totalCourse, Courses]);
  return (
    <>
      <IconButton onClick={handleDrawerOpen}>
        <Badge
          badgeContent={totalCourse !== 0 ? totalCourse : "0"}
          color="primary"
        >
          <MdOutlineShoppingCart size={30} />
        </Badge>
      </IconButton>

      {/* Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div style={{ width: 300, padding: "16px" }}>
          <strong
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <h3>Sepetiniz</h3>
          </strong>
          <div style={{ marginBottom: "10px" }}>
            {Courses.map((item) => {
              if (item.quantity !== 0) {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "15px",
                    }}
                  >
                    <img
                      style={{ width: "80px", height: "auto", marginRight: 10 }}
                      src={item.img}
                      alt=""
                    />
                    <p style={{ fontSize: "14px" }} key={item.id}>
                      {`${item.title.toUpperCase()} Adet x ${item.quantity} `}
                    </p>
                  </div> // test
                );
              }
            })}
          </div>
          <hr />
          {totalAmount !== 0 ? (
            <div style={{ marginTop: "10px" }}>
              Toplam Fiyat : {totalAmount} TL{" "}
            </div>
          ) : (
            <div style={{ marginTop: "10px" }}>Sepet Boş</div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleDrawerClose}
              size="small"
            >
              Kapat
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default DrawerSepet;
