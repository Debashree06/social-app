import { StyleSheet, Text, View, Image ,Pressable} from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* welcome image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />

        {/* title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchLine}>
            Where every finds a home and every images tells a story
          </Text>
        </View>

        {/* footer */}

        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push('signUp')}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account</Text>
          <Pressable  onPress={() => router.push('login')}>
            <Text
              style={[
                styles.loginText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              Login
            </Text>
          </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(40),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    fontSize: hp(4),
    color: theme.colors.text,
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  punchLine: {
    color: theme.colors.text,
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    paddingBottom: hp(6),
  },
  footer: {
    gap: 30,
    width: "100%",
    paddingBottom: hp(6),
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
