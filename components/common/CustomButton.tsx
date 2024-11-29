import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCustomFonts } from '@/hooks/useFont';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  borderRadius?: number;
  width?: number | string;
  height?: number;
  fontSize?: number;
  disabled?: boolean;
  padding?: number | string;

}

export const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = '#007AFF',
  textColor = '#FFFFFF',
  icon,
  iconColor,
  borderRadius = 8,
  width = '100%',
  height = 55,
  fontSize = 16,
  disabled = false,
  
}) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: disabled ? '#A0A0A0' : color,
    borderRadius,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding : 10,
  };

  const textStyle: TextStyle = {
    color: disabled ? '#FFFFFF' : textColor,
    fontSize,
    fontWeight: 'bold',
    marginLeft: icon ? 8 : 0,
    fontFamily:'Jakarta-SemiBold'
  };


  const usefonts = useCustomFonts();

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={fontSize + 4}
          color={iconColor || textColor}
        />
      )}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // No styles needed here as we're using inline styles for flexibility
});

