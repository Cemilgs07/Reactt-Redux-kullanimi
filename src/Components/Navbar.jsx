import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import udemy from "../assets/udemy.svg";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import DrawerSepet from "./DrawerSepet";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  return (
    <AppBar
      className="test1"
      sx={{ height: "64px", padding: 0, margin: "0" }}
      position="static"
    >
      <Toolbar
        className="test2"
        disableGutters
        sx={{
          padding: "0px",
          width: "100%",
          height: "100%",
          margin: "0",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            sx={{
              height: "100%",
              alignItems: "center",
              display: "flex",
            }}
            size={{ xs: 8, md: 6, lg: 8 }}
          >
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.reload();
              }}
              className="logo-css"
              src={udemy}
              alt=""
            />
            <Typography variant="h6" sx={{ marginLeft: 5 }}>
              Keşfedin
            </Typography>
            <Search style={{ marginLeft: "40px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Kurs Ara"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          <Grid
            sx={{
              height: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "25px",
            }}
            size={{ xs: 4, md: 6, lg: 4 }}
          >
            <DrawerSepet />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
