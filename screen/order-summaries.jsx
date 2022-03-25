import { CommonActions, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrdersContext } from "../context/orders";
import { TicketsContext } from "../context/tickets";
import { Button, Modal, OptionsInput, TextInput, Ticket } from "../shared";
import Icon, { ICON } from "../shared/icons";

export function OrderSummaries() {
  const [gender, setGender] = useState("laki-laki");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const { createdTicket, createBuyer, buyer } = useContext(TicketsContext);
  const { submitOrder } = useContext(OrdersContext);

  const genders = [
    { value: "laki-laki", label: "Laki-Laki" },
    { value: "perempuan", label: "Perempuan" },
  ];

  const onSubmit = () => {
    setModalVisible(true);
    createBuyer(createdTicket.id, name, gender, age);
  };

  const onClose = () => {
    setModalVisible(false);
    submitOrder(buyer, createdTicket);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
  };

  const onPrev = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <ScrollView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.box}>
          <Modal visible={modalVisible} onClose={onClose} />
          <Text style={styles.hero}>Kapalzy</Text>
          <Text style={styles.strong}>Informasi Pemesanan</Text>
          <Ticket data={createdTicket} />
          <Text style={styles.strong}>Data Pemesan</Text>
          <TextInput
            label="Nama Lengkap"
            placeholder="Nama anda..."
            onChangeText={setName}
            iconRender={(focused) => (
              <Icon name={ICON.user} focused={focused} />
            )}
          />
          <OptionsInput
            label="Jenis Kelamin"
            placeholder="Pilih jenis kelamin"
            iconRender={(focused) => <Icon name={ICON.sex} focused={focused} />}
            selected={{ value: gender }}
            onSelect={(selected) => setGender(selected)}
            options={genders}
          />
          <TextInput
            label="Umur"
            placeholder="Umur anda..."
            mode="decimal-pad"
            onChangeText={(text) => setAge(Number(text))}
            iconRender={(focused) => (
              <Icon name={ICON.date} focused={focused} />
            )}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button title={"Kembali"} onPress={onPrev} />
            <Button title={"Submit"} onPress={onSubmit} />
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginVertical: 32,
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
