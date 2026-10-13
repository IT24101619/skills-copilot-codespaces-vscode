import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>React Native Web Page</Text>
        <Text style={styles.subtitle}>
          This page is rendered with React Native components on the web.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f8fafc",
    flex: 1,
    justifyContent: "center",
    minHeight: "100vh",
    padding: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    maxWidth: 520,
    padding: 24,
    width: "100%",
  },
  subtitle: {
    color: "#334155",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    color: "#0f172a",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
});
