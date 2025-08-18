import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./src/components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente
    backgroundColor: "#f3f4f6",
  },
});
