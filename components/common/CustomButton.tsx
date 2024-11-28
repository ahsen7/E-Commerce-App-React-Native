import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCustomFonts } from "@/hooks/useFont";

type CustomButtonProps = {
  text: string;
  icon?: string; 
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  iconColor?: string;
  iconSize?: number;
  width?: number | string; 
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  onPress,
  buttonStyle,
  textStyle,
  iconColor = "#fff",
  iconSize = 20,
  width = "auto", 
}) => {
      const fontsLoaded = useCustomFonts();
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, { width }]} 
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6200ee",
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 25,
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    fontFamily:'Jakarta-SemiBold'
  },
  icon: {
    marginRight: 8,
  },
});

// import React from "react";
// import { Button } from "react-native-paper";

// const CustomButton = () => {
//   return (
//     <Button
//       icon="camera"
//       mode="contained"
//       onPress={() => console.log("Pressed")}
//       style={{
//         paddingVertical: 16,  // Increase height of button
//         paddingHorizontal: 32,  // Increase width of button
//         borderRadius: 12,  // Adjust border radius for better look
//       }}
//       labelStyle={{
//         fontSize: 20,  // Increase text size
//         fontWeight: "bold",  // Make text bold
//       }}
//       iconColor="#fff"  // Adjust icon color
//       iconSize={30}  // Increase icon size
//       contentStyle={{
//         justifyContent: "center",  // Align content in the center
//         alignItems: "center",  // Center the text and icon
//       }}
//     >
//       Press me
//     </Button>
//   );
// };

// export default CustomButton;

