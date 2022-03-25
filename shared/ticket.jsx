import { View, Text, StyleSheet } from "react-native";

import Icon, { ICON } from "./icons";

export function Ticket(props) {
  const { source, destination, date, time, service, passengers, price } =
    props.data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{source}</Text>
        <Icon name={ICON.destination} focused={false} />
        <Text style={styles.headerText}>{destination}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Jadwal Masuk Pelabuhan</Text>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Layanan</Text>
        <Text>{service}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.price}>
        <Text>Dewasa x {passengers}</Text>
        <Text>Rp. {Number(passengers) * Number(price)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    marginVertical: 16,
    width: "100%",
  },

  title: {
    fontWeight: "bold",
  },

  line: {
    borderBottomWidth: 3,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },

  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  box: {
    padding: 8,
  },

  price: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 6,
  },
});
