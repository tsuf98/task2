import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = (props) => {
    return (
        <div style={{ height: '30vh', width: '100%', marginTop: '20px', marginBottom: '5px'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAPcNVUJ0rU27aiB6ZPXsk8m-SfPGBUiUo' }}
            defaultCenter={
                {lat: props.lat,
                lng: props.lng
            }}
            defaultZoom={15}
          >
          </GoogleMapReact>
        </div>
      );
}

export default Map;