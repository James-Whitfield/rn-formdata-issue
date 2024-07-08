import { StyleSheet, Pressable, Text, Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function HomeScreen() {
  const buttonPress = React.useCallback(() => {
    // Build a large FormData object
    const formData = new FormData();
    //! Select the size of formData
    const numberOfKeyValuePairs = 300;
    for (let i = 0; i < numberOfKeyValuePairs; i++) {
      formData.append(i.toString(), i.toString());
    }
    // Try and send a request with the formData
    fetch("https://anyurl.com", {
      method: "post",
      body: formData,
    })
      .then((a) => console.log("It sent"))
      .catch((a) => console.log(a));
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        <Pressable style={styles.button} onPress={buttonPress}>
          <Text style={styles.text}>Click to show error here!</Text>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
