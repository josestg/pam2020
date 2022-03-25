import { View, Text, StyleSheet } from "react-native";
import Icon, { ICON } from "./icons";

export function Ticket(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bakauheni</Text>
        <Icon name={ICON.destination} focused={false} />
        <Text style={styles.headerText}>Merak</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Jadwal Masuk Pelabuhan</Text>
        <Text>Kamis, 17 Maret 2022</Text>
        <Text>15:30 WIB</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Layanan</Text>
        <Text>Express</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.price}>
        <Text>Dewasa x 1</Text>
        <Text>Rp. 65.000</Text>
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
