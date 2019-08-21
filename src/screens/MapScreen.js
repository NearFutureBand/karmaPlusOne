import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <MapView
          style={{ height: 400, width: 400}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

export default MapScreen;