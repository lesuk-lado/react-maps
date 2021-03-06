import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map(){
  return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{ lat:-1.292066, lng: 36.821945 }}
    />
  );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const API_KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDTo4yuHCcyjs6R0qN8U3kak0ey7aGgthQ`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
