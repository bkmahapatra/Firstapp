import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <View style={signpg.container}>
      <Image style={signpg.header} source={require("../assets/image7.png")} />
      <View style={signpg.inputContaier}>
        <Image
          style={signpg.logoImage}
          source={require("../assets/logo.png")}
        />
        <TextInput
          style={signpg.idInput}
          placeholder="Please enter you id here"
        />
        <View style={signpg.btn}>
          <Pressable
            onPress={() => {
              navigation.navigate("otpPg");
            }}
          >
            <Text style={signpg.btnText}>Sign in</Text>
          </Pressable>
        </View>
        <Text>By signing in, you agree to our Terms & Conditions.</Text>
      </View>
    </View>
  );
}

const signpg = StyleSheet.create({
  container: {},
  header: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logoImage: {
    margin: 25,
  },
  inputContaier: {
    alignItems: "center",
  },
  idInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#C0C0C0",
    width: "90%",
  },
  btn: {
    margin: 20,
    width: "90%",
    height: 50,
    backgroundColor: "#37ACEC",
    padding: 5,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    padding: 5,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
