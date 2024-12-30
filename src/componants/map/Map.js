import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Map() {
    const containerStyle = {
        width: '100%',
        height: '400px'
      };
       
      const center = {
        lat: 37.7749,   
        lng: -122.4194   
      };
    return (
         
        <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
    )
}

export default Map;
  

    