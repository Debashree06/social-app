import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";
import { wp, hp } from "../../helpers/common";
import ScreenWrapper from "../../components/ScreenWrapper";
import Header from "../../components/Header";
import Icon from "../../assets/icons";
import { theme } from "../../constants/theme";
import { supabase } from "../../lib/supabase";
import Avatar from "../../components/Avatar";

const Profile = () => {
  const router = useRouter();
  const { user, setAuth } = useAuth();
  // console.log("user details", user);

  const onLogout = async () => {
    //setAuth(null);
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("sign out", "Error signing out");
    }
  };

  const handleLogout = async () => {
    //show confirm
    Alert.alert("Confirm", "Are you sure you want to logout ?", [
      {
        text: "Cancel",
        onPress: () => console.log("model cancelled"),
        style: "cancel",
      },
      {
        text: "logout",
        onPress: () => onLogout(),
        style: "destructive",
      },
    ]);
  };

  return (
    <ScreenWrapper>
      <UserHeader user={user} router={router} handleLogout={handleLogout} />
    </ScreenWrapper>
  );
};

const UserHeader = ({ user, router, handleLogout }) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: wp(2) }}
    >
      <View>
        <Header title="Profile" mb={30} />
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Icon name="logout" color={theme.colors.rose} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={{ gap: 15 }}>
          <View style={styles.avatarContainers}>
            <Avatar
              uri={user?.image}
              size={hp(12)}
              rounded={theme.radius.xxl * 1.4}
            />
            <Pressable
              style={styles.editIcon}
              onPress={() => router.push("editProfile")}
            >
              <Icon name="edit" strokeWidth={2.5} size={20} />
            </Pressable>
          </View>

          {/* username and address */}
          <View style={{ alignItems: "center", gap: 4 }}>
            <Text style={styles.userName}>{user && user.name}</Text>
            <Text style={styles.infoText}>{user && user.address}</Text>
          </View>

          <View style={{ gap: 10 }}>
            <View style={styles.info}>
              <Icon name="mail" size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>{user && user.email}</Text>
            </View>
           {
            user && user.phoneNumber && (
              <View style={styles.info}>
              <Icon name="call" size={20} color={theme.colors.textLight} />
              <Text style={styles.infoText}>{user && user.email}</Text>
            </View>
            )
           }

           {
             user && user.bio && (
              <Text style={styles.infoText}>{user.bio}</Text>
             )
           }
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20,
  },
  headerShape: {
    width: wp(100),
    height: hp(20),
  },
  avatarContainers: {
    width: hp(12),
    height: hp(12),
    alignSelf: "center",
    position: "relative",
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },

  userName: {
    fontSize: hp(3),
    fontWeight: "500",
    color: theme.colors.textDark,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoText: {
    fontSize: hp(1.6),
    fontWeight: "500",
    color: theme.colors.textLight,
  },

  logoutButton: {
    position: "absolute",
    right: 0,
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "#fee2e2",
  },

  listStyle: {
    paddingHorizontal: wp(4),
    paddingBottom: 30,
  },

  noPosts: {
    fontSize: hp(2),
    textAlign: "center",
    color: theme.colors.text,
  },
});
