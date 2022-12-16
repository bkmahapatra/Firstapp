import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default function Welcome({navigation}) {
  return (
    <View style={style.container}>
        <Image style={style.contImg} source={require('../assets/salogo.jpg')}/>
        <Text style={style.welcomeText}>Welcome Agent</Text>
        <Text style={style.agentName}>Arjun Prabhakar</Text>
        <Text style={style.wish}>Have a great experience with us!</Text>

        <Pressable style={style.btn} onPress={()=> navigation.navigate("dashboard")}>
            <LinearGradient style={style.btn} colors={['#38405F','#B388EB']} start={{x:0.0,y:0.0}} end={{x:1.0,y:1.0}}>
                <Text style={style.btnText}>Done</Text>
            </LinearGradient>
        </Pressable>
    </View>

  );
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center"
    },
    contImg:{
        margin: 100
    },
    welcomeText:{
        fontSize: 40,
        fontWeight: '600'
    },
    agentName:{
        fontWeight:"500",
        fontSize:20,
        margin:10   
    },
    wish:{
        fontSize:14,
        color:'#B388EB',
        fontWeight:"400",
        lineHeight:21,
        margin:20
    },
    btn:{
        alignSelf:"center",
        width:'95%',
        borderRadius:10,
        position:"absolute",
        bottom: 10
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontSize:20,
        fontWeight:"600",
        padding:15
    }
    
})