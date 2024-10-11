import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Accordion({
  children,
  accordionItem,
  viewKey,
}: {
  children: React.ReactNode;
  accordionItem: React.ReactNode;
  viewKey: string | number;
}) {
  const open = useSharedValue(false);
  const onPress = () => {
    open.value = !open.value;
    setOpened((t) => !t);
  };

  const [opened, setOpened] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 16,
        }}
        onPress={onPress}>
        {children}

        {!opened && <Feather name="chevron-down" color={'#00BF63'} size={24} />}
        {opened && <Feather name="chevron-up" color={'#00BF63'} size={24} />}
      </TouchableOpacity>
      <AccordionItem viewKey={viewKey} isExpanded={open}>
        {accordionItem}
      </AccordionItem>
    </View>
  );
}

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}: {
  isExpanded: SharedValue<boolean>;
  children: React.ReactNode;
  style?: ViewStyle;
  duration?: number;
  viewKey: string | number;
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View key={`accordionItem_${viewKey}`} style={[styles.animatedView, bodyStyle, style]}>
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}>
        {children}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    width: 200,
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    // alignItems: 'center',
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
  },
  box: {
    height: 120,
    width: 120,
    color: '#f8f9ff',
    backgroundColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
