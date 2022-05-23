import React, { Component } from 'react';
import {getMapLink, ZaptMap, addLocationListener } from 'react-native-zapt-sdk';

const placeID = '-ltvysf4acgzdxdhf81y';

export default class App extends Component {
  state = {
    mapLink: '',
  };

  options = {
      floorId: 1
    };

  componentDidMount() {
    getMapLink(placeID, this.options).then((mapLink) => {
      this.setState({
        mapLink: mapLink
      });
    });

    addLocationListener(placeID, (location) => {
      console.info(location);
    });
  }

  render() {
    return (
      <ZaptMap 
        placeID={placeID}
      />
    );
  }
}