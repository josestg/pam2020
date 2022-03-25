import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

export const ICON = {
  ship: "ship",
  service: "seat-passenger",
  date: "calendar",
  time: "clock",
  destination: "arrow-right",
};

export default function Icon({ name, focused }) {
  const color = focused ? "green" : "black";
  const size = 24;

  switch (name) {
    case ICON.ship:
    case ICON.destination:
      return <Fontisto name={name} size={size} color={color} />;
    case ICON.service:
    case ICON.date:
    case ICON.time:
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    default:
      throw new Error("unkown name");
  }
}
