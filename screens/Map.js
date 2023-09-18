import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  const region = {
    latitude: 12.9062,
    longitude: 77.7066,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
