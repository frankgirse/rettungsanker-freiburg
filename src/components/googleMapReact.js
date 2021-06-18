// [START maps_map_simple]
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '33vh', width:'33%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5NWgqE5pAgfIdDTMJIZslYWKakJBcmuo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Rettungsanker Freiburg"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;