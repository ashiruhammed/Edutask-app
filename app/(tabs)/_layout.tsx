import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import LearnIcon from '~/components/icons/learn-icon';
import ProfileIcon from '~/components/icons/profile-icon';

const Layout = () => {
  const { theme } = useStyles();
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00BF63',
        tabBarInactiveTintColor: '#000',
        tabBarItemStyle: { marginTop: 10 },
        tabBarLabelStyle: {
          fontSize: 14,
          ...theme.typography.light,
        },

        tabBarStyle: {
          backgroundColor: '#FFF',
          elevation: 5,
          height: 65 + insets.bottom,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="(snoop)"
        options={{
          title: 'Snoop',
          tabBarIcon: ({ color, focused }) => <Feather name="eye" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => <AntDesign name="search1" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="learning"
        options={{
          title: 'Learning',
          tabBarIcon: ({ color, focused }) => <LearnIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
