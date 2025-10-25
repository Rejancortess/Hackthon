// components/ui/GradientCircle.tsx
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet } from "react-native";

type Props = {
  size?: number;
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  opacity?: number;
  style?: any;
};

export const GradientCircle = ({
  size = 180,
  colors = ["#A6E3B7", "#A8D8F0"],
  top,
  bottom,
  left,
  right,
  opacity = 0.8,
  style,
}: Props) => {
  return (
    <LinearGradient
      colors={colors}
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          position: "absolute",
          top,
          bottom,
          left,
          right,
          opacity,
        },
        style,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  circle: {},
});
