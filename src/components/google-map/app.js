import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import DetailsContainer from './DetailsContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          userId: 1,
          fullname: 'Gopendra Kumar',
          city: 'Jhunjhunu',
          phone: '8934823923',
          color: 'red',
          lat: 59.955413,
          lng: 30.337844
        },
        {
          userId: 2,
          fullname: 'Vikash Kumar',
          city: 'Jhunjhunu',
          phone: '8934823923',
          color: 'green',
          lat: 59.94,
          lng: 30.2629
        },
        {
          userId: 3,
          fullname: 'Pankaj Kumar',
          city: 'Jhunjhunu',
          phone: '8934823923',
          color: 'yellow',
          lat: 59.90,
          lng: 30.26
        }
      ],
      open: null
    }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        > 
          {
            this.state.data.map((object) => {
              return (<Marker
                parent={this}
                key={object.fullname}
                lat={object.lat}
                lng={object.lng}
                details={object}
                color={object.color}
              />)
            })
          }
        </GoogleMapReact>
      </div>
    );
  }
}
