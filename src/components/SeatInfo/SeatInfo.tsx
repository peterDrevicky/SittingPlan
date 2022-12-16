import React from "react";
import { Popover } from "@material-ui/core";
import { styled } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { PopoverNiceContent } from "../PopoverNiceContent/PopoverNiceContent";

const closeIconStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

interface SeatInfoProps {
  id: string;
  open: boolean;
  anchorEl: Element | null;
  onClickCloseButtonHandler: () => void;
}

export const SeatInfo = ({
  id,
  open,
  anchorEl,
  onClickCloseButtonHandler,
}: SeatInfoProps) => {
  return (
    <Popover anchorEl={anchorEl} open={open}>
      <PopoverContent>
        <PopoverNiceContent id={id} />
        <PopoverCloseButton onClick={() => onClickCloseButtonHandler()}>
          <HighlightOff style={closeIconStyle} />
        </PopoverCloseButton>
      </PopoverContent>
    </Popover>
  );
};

const PopoverContent = styled("p")({
  position: "relative",
  height: "200px",
  width: "250px",
  textAlign: "center",
});

const PopoverCloseButton = styled("button")({
  all: "unset",
  borderRadius: "50%",
  cursor: "pointer",
  width: "20px",
  height: "20px",
  position: "absolute",
  top: "-10px",
  right: "5px",
});
