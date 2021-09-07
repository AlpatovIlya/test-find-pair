import React, {FC, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import config from '../constants';
import {RatingScreen} from '../screens';
import {HomeIcon, RaitingIcon} from '../assets';
import {ThemeContext} from 'styled-components';
import HomeNavigator from './HomeNavigator';
const TabNav = createBottomTabNavigator();

const {screenNames} = config;
const iconSize = 32;
const iconDefaultColor = '#000';

const RootNavigator = () => {
  const theme = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.sub,

        },
        headerTitleStyle: {
          color: theme.colors.text,
          fontSize: 21,
          textTransform: 'uppercase',
        },
        tabBarStyle: {
          backgroundColor: theme.colors.sub,
          borderTopWidth: 10,
          borderTopColor: theme.colors.sub,
        },
        tabBarActiveTintColor: theme.colors.main,
      }}>
        <TabNav.Screen
          name={screenNames.HOME}
          component={HomeNavigator}
          options={{
            title: 'Главная',
            tabBarIcon: TabHomeIcon,
          }}
        />
        <TabNav.Screen
          name={screenNames.RATING}
          component={RatingScreen}
          options={{
            title: 'Рейтинг',
            tabBarIcon: TabRatingcon,
          }}/>

      </TabNav.Navigator>
    </NavigationContainer>
  );
};


const TabHomeIcon: FC<{focused: boolean}> = ({focused}) => {
  const theme = useContext(ThemeContext);

  return <HomeIcon
    fill={focused ? theme.colors.main: iconDefaultColor}
    width={iconSize}
    height={iconSize}/>;
};

const TabRatingcon: FC<{focused: boolean}> = ({focused}) => {
  const theme = useContext(ThemeContext);

  return <RaitingIcon
    fill={focused ? theme.colors.main: iconDefaultColor}
    width={iconSize}
    height={iconSize}/>;
};

export default RootNavigator;
