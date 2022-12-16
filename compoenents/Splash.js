import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.navigate("signin");
  }, 1000);
  
  return (
    <View style={styleSp.splashContainer}>
      <Image source={require("../assets/logo.png")} />
    </View>
  );}

const styleSp = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
