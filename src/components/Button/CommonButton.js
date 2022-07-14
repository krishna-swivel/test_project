import React from "react";
import Button from "@mui/material/Button";

function CommonButton({ info, type, onClick }) {
  return (
    <>
      <Button
        size="small"
        variant="contained"
        type={type ? type : ""}
        style={{ width: 100 }}
        onClick={onClick}
      >
        {info ? info : "CLICK"}
      </Button>
    </>
  );
}

export default CommonButton;
