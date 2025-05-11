// import { StyleSheet, Text, View , TouchableOpacity } from "react-native";
// import React from "react";
// import { hp, wp } from "../helpers/common";
// import { theme } from "../constants/theme";
// import moment from "moment";
// import Avatar from "./Avatar";
// import Icon from "../assets/icons";

// const CommentItem = ({ item, canDelete = false }) => {
//     // console.log("check all item: ", item?.created_at)
//   const createdAt = moment(item?.created_at).format("MMM D");
//   return (
//     <View style={styles.container}>
//       <Avatar uri={item?.user?.image} />
//       <View style={styles.content}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <View style={styles.nameContainer}>
//             <Text style={styles.text}>{item?.user?.name}</Text>
//           </View>
//           {/* <Text>.</Text> */}
//           <Text style={[styles.text, { color: theme.colors.textLight }]}>
//             {createdAt}
//           </Text>
//         </View>
//         {canDelete && (
//           <TouchableOpacity>
//             <Icon name="delete" size={20} color={theme.colors.rose} />
//           </TouchableOpacity>
//         )}

//         <Text style={[styles.text, { fontWeight: "normal" }]}>
//           {item?.text}
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default CommentItem;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     gap: 7,
//   },

//   content: {
//     backgroundColor: "rgba(0,0,0,0.06)",
//     flex: 1,
//     gap: 5,
//     paddingHorizontal: 14,
//     paddingVertical: 10,
//     borderRadius: theme.radius.md,
//     borderCurve: "continuous",
//   },
//   highlight: {
//     borderWidth: 0.2,
//     backgroundColor: "white",
//     borderColor: theme.colors.dark,
//     shadowColor: theme.colors.dark,
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },

//   nameContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 3,
//   },

//   text: {
//     fontSize: hp(1.6),
//     fontWeight: theme.fonts.medium,
//     color: theme.colors.textDark,
//   },
// });





import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { hp } from "../helpers/common";
import { theme } from "../constants/theme";
import moment from "moment";
import Avatar from "./Avatar";
import Icon from "../assets/icons";

const CommentItem = ({ 
    item, 
    canDelete = false ,
    onDelete =()=>{},
    highlight = false
}) => {
  const createdAt = moment(item?.created_at).format("MMM D");

  const handleDelete= ()=>{
    Alert.alert("Confirm", "Are you sure you want do this?", [
        {
          text: "Cancel",
          onPress: () => console.log("model cancelled"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => onDelete(item),
          style: "destructive",
        },
      ]);
  }

  return (
    <View style={styles.row}>
      <Avatar uri={item?.user?.image} />
      <View style={[styles.bubble, highlight && styles.highlight]}>
        <View style={styles.headerRow}>
          <View style={styles.nameDate}>
            <Text style={styles.name}>{item?.user?.name}</Text>
            <Text style={styles.date}>• {createdAt}</Text>
          </View>
          {canDelete && (
            <TouchableOpacity onPress={ handleDelete}>
              <Icon name="delete" size={18} color={theme.colors.rose} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.message}>{item?.text}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 12,
    },
    bubble: {
      backgroundColor: "rgba(0,0,0,0.06)",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      marginLeft: 8,
      flex: 1,
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    nameDate: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    name: {
      fontSize: hp(1.6),
      fontWeight: theme.fonts.medium,
      color: theme.colors.textDark,
    },
    date: {
      fontSize: hp(1.5),
      color: theme.colors.textLight,
    },
    message: {
      fontSize: hp(1.6),
      color: theme.colors.textDark,
      marginTop: 4,
    },
    highlight:{
      borderWidth: 0.2,
      backgroundColor: 'white',
      borderColor: theme.colors.dark,
      shadowColor: theme.colors.dark,
      shadowOffset: {width:0, height:0},
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation:5
    }
  });
  