import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import EmployeeItem from "./subcomponents/EmployeeItem";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleMeeting({params}) {
  const [employee, setEmployee] = useState([
    { name: "Sayali Khot", designation: "web developer" },
    { name: "Sayali Khot", designation: "web developer" },
    { name: "Sayali Khot", designation: "web developer" },
    { name: "Sayali Khot", designation: "web developer" },
  ]);
  const [date, SetDate] = useState(new Date());
  let _crDate =
    date.getDate() + ":" + date.getMonth() + ":" + date.getFullYear();
  let _crDay = date.getDay();
  let _crTime = date.getHours() + ":" + date.getMinutes();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <ScrollView>
      <View style={meetStyle.ScheduleContainer}>
        <TextInput
          style={meetStyle.ScheduleInputText}
          placeholder="Type the meeting title"
          maxLength={30}
        ></TextInput>
        <Text style={meetStyle.ScheduleMeetingTitle}>Client Logo</Text>
        <View style={meetStyle.ScheduleAddMeeting}>
          <Icon
            style={meetStyle.ScheduleAddIcon}
            name="image"
            size={25}
            color={"#000"}
          />
          <Text style={meetStyle.ScheduleAddText}>add client logo</Text>
        </View>
        <Text style={meetStyle.ScheduleMeetingTitle}>Meeting Information</Text>
        <View style={meetStyle.inputMeetingDetails}>
          <View style={meetStyle.inputBoxContainer}>
            <Text style={meetStyle.inputBoxTitle}>Date</Text>
            <Text style={meetStyle.inputBox}>{_crDate}</Text>
            <Icon style={meetStyle.inputBoxIcon} />
          </View>
          <View style={meetStyle.inputBoxContainer}>
            <Text style={meetStyle.inputBoxTitle}>Day</Text>
            <Text style={meetStyle.inputBox}>{weekDays[_crDay]}</Text>
            <Icon style={meetStyle.inputBoxIcon} />
          </View>
          <View style={meetStyle.inputBoxContainer}>
            <Text style={meetStyle.inputBoxTitle}>Start Time</Text>
            <Text style={meetStyle.inputBox}>{_crTime}</Text>
            <Icon style={meetStyle.inputBoxIcon} />
          </View>
          <View style={meetStyle.inputBoxContainer}>
            <Text style={meetStyle.inputBoxTitle}>End Time</Text>
            <Text style={meetStyle.inputBox}>{_crTime}</Text>
            <Icon style={meetStyle.inputBoxIcon} name="add" />
          </View>
        </View>
        <Text style={meetStyle.ScheduleMeetingTitle}>Description</Text>
        <TextInput
          style={meetStyle.inputMeetingDesc}
          maxLength={300}
          multiline={true}
          editable
          // value={
          //   "image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent.background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent."
          // }
          placeholder="Max letters limit is 300."
        />
        <Text style={meetStyle.ScheduleMeetingTitle}>Employees To Attend</Text>
        <View>
          <Pressable onPress={() => navigation.navigate("dashboard")}>
            <LinearGradient
              style={meetStyle.btn}
              colors={["#38405F", "#B388EB"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
            >
              <Text style={meetStyle.btnText}>Add Employees</Text>
            </LinearGradient>
          </Pressable>
        </View>
        {employee.map((item) => {
          return <EmployeeItem name={item.name} jobRole={item.designation} />;
        })}
        {/* <FlatList
          style={meetStyle.empAdd}
          data={employee}
          renderItem={({ item }) => (
            <EmployeeItem name={item.name} jobRole={item.designation} />
          )}
        /> */}
        <Pressable
          style={meetStyle.btnSchedule}
          onPress={() => navigation.navigate("dashboard")}
        >
          <LinearGradient
            style={meetStyle.btn}
            colors={["#38405F", "#B388EB"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            <Text style={meetStyle.btnText}>Schedule Meeting</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const meetStyle = StyleSheet.create({
  ScheduleContainer: {
    margin: 10,
  },
  ScheduleInputText: {
    color: "black",
    padding: 10,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 16,
  },
  ScheduleMeetingTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#646160",
    marginVertical: 10,
  },
  ScheduleAddMeeting: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 50,
    justifyContent: "center",
  },
  ScheduleAddText: {
    fontSize: 16,
  },
  ScheduleAddIcon: {
    marginLeft: 10,
  },
  inputMeetingDetails: {
    backgroundColor: "#38405F",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  inputBoxContainer: {
    flex: 0,
    flexDirection: "row",
    paddingVertical: 10,
    // borderBottomColor: "#C0C0C0",
    // borderBottomWidth: 1,
  },
  inputBoxTitle: {
    flex: 3,
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  inputBox: {
    color: "white",
    flex: 1,
    fontWeight: "400",
    fontSize: 16,
  },
  inputBoxIcon: {
    flex: 0.5,
  },
  inputMeetingDesc: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    padding: 10,
    height: 120,
    textAlignVertical:"top",
  },
  btn: {
    alignSelf: "center",
    width: "95%",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    padding: 15,
  },
  btnSchedule: {},
});
