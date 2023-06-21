import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Profile from './screens/Profile';
import List from './screens/List';

type ItemProps = {
  picture: string;
  index: number;
  age: number;
  firstname: string;
  surname: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
};

export type RootStackparamlist = {
  Profile: {item: ItemProps};
  List: undefined;
};

//Creating the stack
const stack = createNativeStackNavigator<RootStackparamlist>();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="List" 
  //     screenOptions={{
  //   headerShown: false
  // }}
  >
        <stack.Screen
          name="Profile"
          component={Profile}
        />
        {/* <stack.Screen
          name="List"
          component={List}
          options={{
            title: 'List',
          }}
        />   */}
        <stack.Screen
          name="List"
          component={List}
        /> 
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
