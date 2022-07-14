import React from "react";
import Button from "@mui/material/Button";

function CommonButton({ info, type, onClick }) {
  return (
    <>
      <Button
        size="small"
        variant="contained"
        type={type ? type : ""}
        style={{ maxWidth: 10 }}
        onClick={onClick}
      >
        {info}
      </Button>
    </>
  );
}

export default CommonButton;
