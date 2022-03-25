import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TicketsContext } from "../context/tickets";
import { Button, Ticket } from "../shared";

export function OrderPreviews() {
  const navigation = useNavigation();

  const { createdTicket } = useContext(TicketsContext);

  const { passengers, price } = createdTicket;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <View style={styles.box}>
        <Text style={styles.hero}>Kapalzy</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.strong}>Kuota Tersedia</Text>
          <Text style={styles.strong}>{1000 - passengers}</Text>
        </View>
        <Text style={styles.strong}>Rincian Tiket</Text>
        <Ticket data={createdTicket} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.strong}>Total</Text>
          <Text style={styles.strong}>
            Rp. {Number(passengers) * Number(price)}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            title={"Kembali"}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            title={"Lanjutkan"}
            onPress={() => {
              navigation.navigate("Home", { screen: "Summaries" });
            }}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1A202C",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    height: "50%",
    borderBottomEndRadius: 60,
    borderBottomLeftRadius: 60,
  },

  hero: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 18,
    textAlign: "center",
  },

  strong: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  box: {
    marginTop: 32,
    width: 320,
    display: "flex",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#1A202C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
});
