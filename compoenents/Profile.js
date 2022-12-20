import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Profile(params) {
  return (
    <View style={styleProf.profContainer}>
      <View style={styleProf.profHeader}>
        <LinearGradient
          style={styleProf.imgBorder}
          colors={["#B388EB", "#F7AEF8"]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
        >
          <Image
            style={styleProf.profImage}
            source={require("../assets/prof.jpg")}
          />
        </LinearGradient>
        <Text style={styleProf.profName}>Arjun Prabhakar</Text>
        <Text style={styleProf.profDesig}>CEO</Text>
      </View>
      <View style={styleProf.profLinks}>
        <View style={styleProf.linkItems}>
          <View style={styleProf.linkItemIcon}></View>
          <Text>Call</Text>
        </View>
        <View style={styleProf.linkItems}>
          <View style={styleProf.linkItemIcon}></View>
          <Text>Email</Text>
        </View>
        <View style={styleProf.linkItems}>
          <View style={styleProf.linkItemIcon}></View>
          <Text>Chat</Text>
        </View>
      </View>
      <View style={styleProf.profList}>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Blood Group</Text>
          <Text style={styleProf.itemInfo}>O+ve</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Emergency No.</Text>
          <Text style={styleProf.itemInfo}>+91-9999XXXXXX</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Employee Type</Text>
          <Text style={styleProf.itemInfo}>Full Time</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Employee Id</Text>
          <Text style={styleProf.itemInfo}>BG12387E42893R4XXXX</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Date of Joining</Text>
          <Text style={styleProf.itemInfo}>Aug 8th 2022</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Office Location</Text>
          <Text style={styleProf.itemInfo}>HSR Layout</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Primary Team</Text>
          <Text style={styleProf.itemInfo}>Management</Text>
        </View>
        <View style={styleProf.listItem}>
          <Text style={styleProf.itemTitle}>Shift</Text>
          <Text style={styleProf.itemInfo}>Day Shift</Text>
        </View>
      </View>
    </View>
  );
}

const styleProf = StyleSheet.create({
  profContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  profHeader: {
    flex: 0,
    alignItems: "center",
  },
  profName: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "500",
    color: "#38405F",
  },
  profDesig: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    color: "#B388EB",
  },
  imgBorder: {
    borderRadius: 100,
    padding: 4,
  },
  profImage: {
    width: 160,
    height: 160,
    backgroundColor: "black",
    borderRadius: 100,
  },
  profLinks: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  linkItems: {
    marginHorizontal: 20,
    marginVertical: 20,
    flex: 0,
    alignItems: "center",
  },
  linkItemIcon: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 5,
    backgroundColor: "#38405F",
  },
  listItem: {
    flex: 0,
    flexDirection: "row",
    paddingVertical: 7,
  },
  itemTitle: {
    flex: 1,
    lineHeight: 18,
    fontSize: 16,
    color: "#646160",
  },
  itemInfo: {
    flex: 2,
    lineHeight: 18,
    fontSize: 16,
    fontWeight: "500",
  },
});
