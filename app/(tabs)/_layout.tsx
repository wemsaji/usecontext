import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import { Button, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { ColorSchemeContext } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  console.log('TabLayout', colorSchemeContext.colorScheme);
  const ColorChangeButton = () => <Button title='色変え'
    onPress={() => colorSchemeContext.toggleColorScheme()} />;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorSchemeContext.colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: colorSchemeContext.colorScheme === 'light'
              ? Colors['light'].background : 'red',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          headerRight: () => <ColorChangeButton />,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: true,
          headerRight: () => <ColorChangeButton />,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
