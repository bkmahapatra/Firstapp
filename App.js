import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SignIn from "./compoenents/SignIn";
import Splash from "./compoenents/Splash";
import Otp from "./compoenents/Otp";
import Welcome from "./compoenents/Welcome";
import Home from "./compoenents/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [enteredText, setEnteredText] = useState("");
  // const [Todolist, setTodoList] = useState([]);

  // const ontextinput = (text) => {
  //   // console.log(text)
  //   setEnteredText(text);
  // };
  // const onpressadd = () => {
  //   setTodoList((prev) => [...prev, enteredText]);
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ title: "Bricstal" }}
        />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="otpPg" component={Otp} />
        <Stack.Screen name="welcome_pg" component={Welcome} />
        <Stack.Screen name="dashboard" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

    // <SignIn/>
    // <View style={styles.container}>

    //   <StatusBar backgroundColor="blue" />

    //   <View>
    //     <Text style={{}}>TASK</Text>
    //   </View>

    //   <View style={style2.listContainer}>
    //     <Text>hello world</Text>
    //     <Image source={require('./assets/logo.png')}/>
    //     <FlatList
    //       data={Todolist}
    //       renderItem={({ item }) => (
    //         <View key={item} style={style2.listItem}>
    //           <Text style={style2.listText}>{item}</Text>
    //         </View>
    //       )}
    //     />
    //   </View>
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //       placeholder="Enter text here..."
    //       onChangeText={ontextinput}
    //     />
    //     <View></View>
    //     <Button title="Add" onPress={onpressadd} />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column-reverse",
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
  },
  inputContainer: {
    flex: 1,
    // flexDirection:"row",
    justifyContent: "space-between",
  },
});

const style2 = StyleSheet.create({
  listContainer: {
    flex: 5,
    margin: 10,
    marginTop: 50,
  },
  listItem: {
    borderWidth: 2,
    margin: 2,
    padding: 10,
    borderRadius: 10,
  },
  listText: {
    fontSize: 20,
  },
});
