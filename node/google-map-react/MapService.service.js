import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 0, lng: 0 },
      zoom: 10,
      markers: []
    };
  }

  static defaultProps = {
    center: { lat: 0, lng: 0 },
    zoom: 10
  };

  onMapClick = (event) => {
    const newMarker = {
      lat: event.lat,
      lng: event.lng
    };
    const markers = [...this.state.markers, newMarker];
    this.setState({ markers });
  };

  renderMarkers = () => {
    return this.state.markers.map((marker, index) => (
      <div
        key={index}
        lat={marker.lat}
        lng={marker.lng}
        className="marker"
      >
        <div className="marker-tooltip">Marker {index + 1}</div>
      </div>
    ));
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.onMapClick}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapService;