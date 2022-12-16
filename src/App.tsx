import "./App.css";
import React from "react";
import { styled } from "@material-ui/core";
import { SeatingOrder } from "./components/SeatingOrder/SeatingOrder";

const mapImg = require("./images/sittingPlanImg.jpg");

const App = () => {
  return (
    <MapPage>
      <MapContainer style={{ backgroundImage: `url(${mapImg})` }}>
        <SeatingOrder />
      </MapContainer>
    </MapPage>
  );
};

const MapPage = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const MapContainer = styled("div")({
  position: "relative",
  marginTop: "250px",
  border: "5px solid blue",
  height: "581px",
  width: "1346px",
});

export default App;
