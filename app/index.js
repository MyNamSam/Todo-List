
import { StyleSheet, Text, View } from "react-native";

import List from "../components/list";
import Heading from "../components/heading";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Heading />
      <List />
    </View>
  );
};