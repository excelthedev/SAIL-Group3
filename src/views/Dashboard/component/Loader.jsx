import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <p className="flex items-center">
        Loading Available Talents...Please wait! {"  "}
        <CircularProgress color="success" />{" "}
      </p>
    </Box>
  );
}
