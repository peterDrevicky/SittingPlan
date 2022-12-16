import React, { useRef, useState } from "react";
import { SeatInfo } from "../SeatInfo/SeatInfo";
import { styled } from "@material-ui/core";

interface SeatingPlaceProps {
  top: string;
  left: string;
  id: string;
}

export const SeatingPlace = ({ top, left, id }: SeatingPlaceProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const seatingPlaceRef = useRef(null);

  const onClickHandler = (): void => {
    setAnchorEl(seatingPlaceRef.current);
    setOpen(true);
  };

  const onClickCloseButtonHandler = (): void => {
    setOpen(false);
  };

  return (
    <>
      <SeatingPlaceDiv
        style={{ top: top, left: left }}
        ref={seatingPlaceRef}
        onClick={onClickHandler}
      />
      <SeatInfo
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClickCloseButtonHandler={() => onClickCloseButtonHandler()}
      />
    </>
  );
};

const SeatingPlaceDiv = styled("div")({
  height: "16px",
  width: "16px",
  backgroundColor: "black",
  borderRadius: "40%",
  position: "absolute",
  cursor: "pointer",
});
