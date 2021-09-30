import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

/* Change lat and lng for address */
const address = {
  lat: 20.980835487094875,
  lng: 105.78792040504916,
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-zEex5XIZ7DOamNn0OkIWV55WlnQR5qI",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} zoom={12} center={address}>
      <Marker position={{ lat: 20.980835487094875, lng: 105.78792040504916 }} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
