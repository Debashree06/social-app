import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  const { user, setAuth } = useAuth();
  console.log("user details", user);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const UserHeader = ({user, router}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>User Header</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
