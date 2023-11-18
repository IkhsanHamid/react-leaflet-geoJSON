import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import L, { divIcon } from "leaflet";
import seg from "./seg.json";
import ecomp from "./ecomp.json";

import "./styles.css";

function App() {
  const setColor = ({ properties }) => {
    return { weight: 1 };
  };

  const customMarkerIcon = (name) =>
    divIcon({
      html: name,
      className: "icon",
    });

  const setIcon = ({ properties }, latlng) => {
    return L.marker(latlng, { icon: customMarkerIcon(properties.Name) });
  };

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Map
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            top: 0,
          }}
          center={[-2.5489, 118.0149]}
          maxBoundsViscosity={1.0}
          zoom={4}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png" />
          <GeoJSON data={seg} style={setColor} />
          <GeoJSON data={ecomp} pointToLayer={setIcon} />
        </Map>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
