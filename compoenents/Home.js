import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MeetingItem from "./subcomponents/MeetingItem";

export default function Home(params) {
  const [dropDn, setDropDn] = useState(true);
  const [meetings, setMeetings] = useState([
    {
      title: "Harvis meeting",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "leo align meeting",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
  ]);
  const [tasks, setTasks] = useState([
    {
      title: "Harvis meeting",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "leo align meeting",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
    {
      title: "Internal app discussion",
      time: "Friday, 9th Dec , 12:00 - 14:00",
    },
  ]);

  return (
    <View style={styleHome.container}>
      <StatusBar />
      <View style={styleHome.headerContainer}>
        <View style={styleHome.topSection}>
          <Text style={styleHome.headerGreet}>Hello</Text>
          <View style={styleHome.headerNotification}>
            <View>
              <Icon
                style={styleHome.icons}
                name="notifications"
                size={18}
                color="red"
              />
            </View>
            <View style={styleHome.profilePhoto}></View>
          </View>
        </View>
        <Text style={styleHome.profileName}>Arjun Prabhakar</Text>
        <Text style={styleHome.date}>Thursday, 15 Dec 2022</Text>
      </View>
      <View style={styleHome.bodyContainer}>
        <View></View>
        <View style={styleHome.meetingContainer}>
          <Pressable
            style={styleHome.meetingBtn}
            onPress={() => {
              console.log("clickcccc");
              setDropDn(!dropDn);
            }}
          >
            <Text style={styleHome.meetingTitle}>My Meetings</Text>
            <Icon name="add" color={"#fff"} size={16} />
          </Pressable>
          {dropDn && (
            <View style={styleHome.itemList}>
              <FlatList
                data={meetings}
                renderItem={({ item }) => (
                  <MeetingItem title={item.title} time={item.time} />
                )}
              />
            </View>
          )}
        </View>
        <View style={styleHome.meetingContainer}>
          <Pressable
            style={styleHome.meetingBtn}
            onPress={() => {
              console.log("clickcccc");
              setDropDn(!dropDn);
            }}
          >
            <Text style={styleHome.meetingTitle}>My Tasks</Text>
            <Icon name="add" color={"#fff"} size={16} />
          </Pressable>
          {!dropDn && (
            <View style={styleHome.itemList}>
              <FlatList
                data={meetings}
                renderItem={({ item }) => (
                  <MeetingItem title={item.title} time={item.time} />
                )}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styleHome = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: {},
  topSection: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerNotification: {
    flex: 0,
    flexDirection: "row",
  },
  icons: { margin: 10 },
  profilePhoto: {},
  headerGreet: {
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 48,
  },
  profileName: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 36,
  },
  headerIcons: {},
  date: {
    fontSize: 12,
    lineHeight: 24,
  },
  profilePhoto: {
    backgroundColor: "#000",
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  bodyContainer: {},
  meetingContainer: {
    backgroundColor: "#38405F",
    color: "white",
    borderRadius: 10,
    marginVertical: 10,
  },
  meetingBtn: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: "center",
  },
  itemList: {
    marginLeft: 12,
    marginRight: 12,
    height: 400,
  },
  meetingTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
