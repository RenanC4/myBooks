import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MyBooksScene } from './Scenes/Books'
export const Routes = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyBooks">
        <Stack.Screen 
          name="MyBooks" 
          component={MyBooksScene} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}