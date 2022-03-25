import { View, Text, StyleSheet } from "react-native";

export function Ticket(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Bakauheni</Text>
        <Text>Merak</Text>
      </View>
      <View>
        <Text>Jadwal Masuk Pelabuhan</Text>
        <Text>Kamis, 17 Maret 2022</Text>
        <Text>15:30 WIB</Text>
      </View>
      <View>
        <Text>Layanan</Text>
        <Text>Express</Text>
      </View>
      <View />
      <View>
        <Text>Dewasa x 1</Text>
        <Text>Rp. 65.000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
