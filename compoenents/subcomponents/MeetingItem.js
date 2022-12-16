import { Image, StyleSheet, Text, View } from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";

export default function MeetingItem(params) {
  return (
    <View style={itemStyle.meetingItem}>
      <View style={itemStyle.meetingImage}>
        {/* <Image source={params.image} /> */}
      </View>
      <View style={itemStyle.meetingDetails}>
        <Text style={itemStyle.meetingTitle}>{params.title}</Text>
        <Text style={itemStyle.meetingTime}>{params.time}</Text>
      </View>
      <View style={itemStyle.meetingStatus}>
        <Icon name="done" size={15} color="#fff"/>
      </View>
    </View>
  );
}

const itemStyle=StyleSheet.create({
    meetingItem:{
        flex:0,
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        alignItems:"center",
        backgroundColor:"#B388EB",
        borderRadius:5,
        padding:10
    },
    meetingImage:{
        height:35,
        width:35,
        backgroundColor: "#fff",
        borderRadius: 35
    },
    
    meetingDetails:{
        flex:3,
        marginLeft: 10,
        
    },
    meetingTime:{
        color:"white",
        fontSize:12
    },
    meetingTitle:{
        color:"white",
        fontSize: 16
    }
    
})