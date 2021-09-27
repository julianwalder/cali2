import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = 'AIzaSyDKXT3El7H0u4bvVxTleAF3HxiLoupKL8g'

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.0656,
      lng: 25.4864
    },
    zoom: 10
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={47.0656} lng={25.4864} text={'Bilbor, Harghita'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'blue' }}>
      <MapPin />
    </div>
  )
}
