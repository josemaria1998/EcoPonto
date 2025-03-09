import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const collectionPoints = [
  {
    id: "1",
    name: "EcoNatal Reciclagem",
    latitude: -5.79448,
    longitude: -35.211,
    address: "Av. Engenheiro Roberto Freire, 2000 - Natal, RN",
  },
  {
    id: "2",
    name: "Recicla Mossoró",
    latitude: -5.18788,
    longitude: -37.3443,
    address: "Rua Frei Miguelinho, 300 - Mossoró, RN",
  },
  {
    id: "3",
    name: "Ponto Verde Parnamirim",
    latitude: -5.9214,
    longitude: -35.2719,
    address: "Av. Maria Lacerda Montenegro, 900 - Parnamirim, RN",
  },
  {
    id: "4",
    name: "Caicó Sustentável",
    latitude: -6.46129,
    longitude: -37.0972,
    address: "Rua Renato Dantas, 55 - Caicó, RN",
  },
  {
    id: "5",
    name: "Macau EcoPonto",
    latitude: -5.1073,
    longitude: -36.6323,
    address: "Av. Centenário, 150 - Macau, RN",
  },
  {
    id: "6",
    name: "Coleta Pau dos Ferros",
    latitude: -6.10486,
    longitude: -38.2076,
    address: "Rua Getúlio Vargas, 210 - Pau dos Ferros, RN",
  },
];

export default function CollectionPointsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos de Coleta no RN</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -5.79448,
          longitude: -35.211,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        {collectionPoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            title={point.name}
            description={point.address}
          />
        ))}
      </MapView>
      <FlatList
        data={collectionPoints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardText}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 20
  },
  map: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
