import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, DateInput, OptionsInput, TextInput } from "../shared";
import Icon, { ICON } from "../shared/icons";

export function OrderInputs() {
  const [serviceClass, setServiceClass] = useState("ekonomi");
  const [serviceOptions, setServiceOptions] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    setServiceOptions([
      { value: "ekonomi", label: "Ekonomi" },
      { value: "bisnis", label: "Bisnis" },
      { value: "eksekutif", label: "eksekutif" },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <View style={styles.inputs}>
        <Text style={styles.hero}>Kapalzy</Text>
        <TextInput
          label="Asal"
          placeholder="Masukkan pelabuhan asal"
          iconRender={(focused) => <Icon name={ICON.ship} focused={focused} />}
        />
        <TextInput
          label="Tujuan"
          placeholder="Masukkan pelabuhan tujuan"
          iconRender={(focused) => <Icon name={ICON.ship} focused={focused} />}
        />
        <OptionsInput
          label="Kelas Layanan"
          placeholder="Pilih layanan"
          iconRender={(focused) => (
            <Icon name={ICON.service} focused={focused} />
          )}
          selected={{ value: serviceClass }}
          onSelect={(selected) => setServiceClass(selected)}
          options={serviceOptions}
        />
        <DateInput
          label="Tanggal Keberangkatan"
          placeholder="Masukkan pelabuhan tujuan"
          value={date}
          mode={"date"}
          onChange={(value) => setDate(value)}
          iconRender={(focused) => <Icon name={ICON.date} focused={focused} />}
        />
        <DateInput
          label="Jam Keberankatan"
          placeholder="Masukkan jam keberangkatan"
          value={time}
          mode={"time"}
          onChange={(value) => setTime(value)}
          iconRender={(focused) => <Icon name={ICON.time} focused={focused} />}
        />
        <Button
          title={"Buat Tiket"}
          onPress={() => {
            navigation.navigate("Home", { screen: "Previews" });
          }}
        />
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

  inputs: {
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
