import "./App.css";
import React from "react";
import { styled } from "@material-ui/core";
import { SeatingOrder } from "./components/SeatingOrder/SeatingOrder";
import { A1Map } from "./images/a1Mapa";

const App = () => {
  return (
    <MapPage>
      <MapContainer>
        <A1Map />
        <SeatingOrder />
      </MapContainer>
    </MapPage>
  );
};

const MapPage = styled("div")({
  marginTop: "0px",
  display: "flex",
  justifyContent: "center",
});

const MapContainer = styled("div")({
  position: "relative",
  margin: "150px 0 90px 0",
  border: "5px solid blue",
  height: "540px",
  width: "1345px",
});

export default App;
