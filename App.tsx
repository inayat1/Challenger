import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import HomeScreen from './src/components/pages/home';
import Login from './src/components/pages/Login';
import Signup from './src/components/pages/Signup';
import Otp from './src/components/pages/Otp';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Otp" component={Otp}/>
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};

export default App;
