import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { DateInput, OptionsInput, TextInput } from "../shared";
import { useState, useEffect } from "react";
import Icon, { ICON } from "../shared/icons";

export function Home() {
  const [serviceClass, setServiceClass] = useState("ekonomi");
  const [serviceOptions, setServiceOptions] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setServiceOptions([
      { value: "ekonomi", label: "Ekonomi" },
      { value: "bisnis", label: "Bisnis" },
      { value: "eksekutif", label: "eksekutif" },
    ]);
  }, []);

  return (
    <View style={styles.container}>
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
        iconRender={(focused) => <Icon name={ICON.service} focused={focused} />}
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
