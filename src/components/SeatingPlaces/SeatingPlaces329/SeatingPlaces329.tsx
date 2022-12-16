import { map } from "lodash";
import React from "react";
import { SeatingPlace } from "../../SeatingPlace/SeatingPlace";
import positions from "./positions.json";

export const SeatingPlaces329 = () => {
  const seatPositions = map(positions, (position) => {
    return (
      <SeatingPlace
        top={position.top}
        left={position.left}
        id={position.id}
        key={position.id}
      />
    );
  });

  return <>{seatPositions}</>;
};
