import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from "react-native-reanimated";
import { Pressable } from "react-native";

import { getNewColor } from "../../utils/colors";

import { styles } from "./styles";

export const Home = () => {
  const randomBackground = useSharedValue<string>("#ffffff");
  const randomText = useSharedValue<string>("#000000");

  const config = {
    duration: 200,
    easing: Easing.inOut(Easing.quad),
  };

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(randomBackground.value, config),
      color: withTiming(randomText.value, config),
    };
  });

  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => {
        randomBackground.value = getNewColor();
        randomText.value = getNewColor();
      }}>
      <Animated.View style={[styles.background, style]}>
        <Animated.Text style={[style, styles.title]}>Hello there</Animated.Text>
      </Animated.View>
    </Pressable>
  );
};
