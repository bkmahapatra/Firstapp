import { StyleSheet, Text, View } from "react-native";

export default function EmployeeItem(params) {
    return(
        <View style={empStyle.empProfile}>
            <View style={empStyle.empPhoto}></View>
            <View>
                <Text style={empStyle.empName}>{params.name}</Text>
                <Text style={empStyle.empDesig}>{params.jobRole}</Text>
            </View>
        </View>
    )
};

const empStyle=StyleSheet.create({
    empProfile:{
        backgroundColor:"#38405F",
        marginVertical:5,
        borderRadius:5,
        padding:8,
        flex:0,
        flexDirection:"row",
        alignItems:"center"
    },
    empPhoto:{
        width:40,
        height:40,
        backgroundColor:"white",
        borderRadius:30,
        marginRight:10
    },
    empName:{
        color:"white",
        fontSize:16
    },
    empDesig:{
        fontSize:12,
        color:"#F7AEF8",

    }
})
