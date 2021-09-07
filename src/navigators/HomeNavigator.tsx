import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import config from '../constants';
import {HomeScreen, MemoryGameScreen} from '../screens';

const {screenNames} = config;


const StackNavigator = createStackNavigator();


const HomeNavigator: FC = () => {
  return (
    <NavigationContainer independent={true}>
      <StackNavigator.Navigator screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name={screenNames.HOME} component={HomeScreen}/>
        <StackNavigator.Screen
          name={screenNames.MEORYGAME}
          component={MemoryGameScreen}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
