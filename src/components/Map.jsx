import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 20.980835487094875, lng: 105.78792040504916 }}
      >
        <Marker
          position={{ lat: 20.980835487094875, lng: 105.78792040504916 }}
        />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
