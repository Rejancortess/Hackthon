import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ViewStyle } from "react-native";

type Props = {
  children?: React.ReactNode;
  colors?: [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  className?: string;
  style?: ViewStyle;
  borderRadius?: number;
};

export const GradientBackground = ({
  children,
  colors = ["#9333EA", "#4F46E5"],
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  className = "",
  style,
  borderRadius = 0,
}: Props) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      className={` flex-1 ${className}`}
      style={[{ borderRadius, overflow: "hidden" }, style]}
    >
      {children}
    </LinearGradient>
  );
};

export const Gradient = ({
  children,
  colors = ["#9333EA", "#4F46E5"],
  start = { x: 0, y: 0.5 },
  end = { x: 1, y: 0.5 },
  className = "",
  style,
  borderRadius = 0,
}: Props) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      className={className}
      style={[{ borderRadius, overflow: "hidden" }, style]}
    >
      {children}
    </LinearGradient>
  );
};
