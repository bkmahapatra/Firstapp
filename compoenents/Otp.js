import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function SignIn({navigation}) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS=== "ios" ? "padding": "height"} style={otp_pg.container}>
      <ImageBackground
        style={otp_pg.headerContainer}
        resizeMode="cover"
        source={require("../assets/image7.png")}
      >
        <View style={otp_pg.headerText}>
          <Text style={otp_pg.headerTitle}>4 - Digit code</Text>
          <Text style={otp_pg.headerDesc}>
            Please enter the code we have send to +91XXXXXX
          </Text>
        </View>
      </ImageBackground>

      <View style={otp_pg.inputContaier}>
        <TextInput style={otp_pg.otpInput} />
        <TextInput style={otp_pg.otpInput} />
        <TextInput style={otp_pg.otpInput} />
        <TextInput style={otp_pg.otpInput} />
      </View>

      <View style={otp_pg.btn}>
        <Pressable
          onPress={() => {
            navigation.navigate("welcome_pg");
          }}
        >
          <Text style={otp_pg.btnText}>Submit</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const otp_pg = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  headerContainer: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "relative",
    // zIndex:10
  },
  headerText: {
    position: "absolute",
    bottom: 10,
    left: 30,
  },
  headerTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  headerDesc: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
  },
  inputContaier: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    margin: 50,
  },

  otpInput: {
    height: 50,
    width: 50,
    backgroundColor: "#D9D9D9",
    margin: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  btn: {
    position: "absolute",
    bottom: 10,
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
