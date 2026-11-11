import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Tapped {count} times</Text>
      <Pressable
        style={styles.button}
        onPress={() => setCount((count) => count + 1)}
      >
        <Text style={styles.buttonText}>Tap Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  count: {
    fontSize: 20,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
