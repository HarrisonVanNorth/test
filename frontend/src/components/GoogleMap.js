import React from 'react'
import Key from '../../../backend/'
import { Map, GoogleApiWrapper, Marker, withScriptjs, withGoogleMap  } from 'google-maps-react';
class GoogleMap extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      stores: []
    }
  }
 

  render(){
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    
    return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 33.4484, lng: 122.0740 }}
          >
          </Map>
        )
    } 
  }


export default GoogleApiWrapper({
  apiKey: 
})(GoogleMap);

const mapStyles = {
  disply: 'center',
  width: '70%',
  height: '100%',
};