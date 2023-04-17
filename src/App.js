import React from "react";
import { useState, useEffect } from "react";
import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { CssBaseline, Grid } from "@material-ui/core";
const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCooridnates] = useState({});
  const [bounds, setBounds] = useState(null);
  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);

      setPlaces(data);
    });
  }, []);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCooridnates={setCooridnates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
