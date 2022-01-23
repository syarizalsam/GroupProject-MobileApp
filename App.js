// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, Button } from 'react-native-elements';

import Login from './components/login';
import LoginAdmin from './components/loginAdmin';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import DashboardAdmin from './components/dashboardAdmin';
import Program from './components/program';
import Request from './components/request';
import PList from './components/list';
import listprog from './components/listprog';
import ProfileScreen from './components/Profile';
import EditProfileScreen from './components/EditProfile';
import ListOrg from './components/listOrg';
import JoinProgram from './components/joinProgram';
import joinprogramlist from './components/joinProgramList';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Sign Up' }}
      />       
      <Stack.Screen
        name="Sign In" 
        component={Login} 
        options={
          {title: 'Sign In' },
          {headerLeft: null} 
        }
      />
      <Stack.Screen
        name="Sign In (Admin)" 
        component={LoginAdmin} 
        options={
          {title: 'Sign In (Admin)' },
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="Dashboard (Admin)" 
       component={DashboardAdmin} 
       options={
         { title: 'Dashboard (Admin)' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="Program" 
       component={Program} 
       options={({navigation}) => ({
          title: 'Program',
          // headerRight: () => <Button
          //   icon={{
          //     name: 'home',
          //     type: 'font-awesome-5',
          //     size: 25,
          //     color: 'white',
          //   }}
          // buttonStyle={{ backgroundColor: ''}}
          // iconRight onPress={() => navigation.navigate('Dashboard')} />
        })}
      />
      <Stack.Screen 
       name="Request" 
       component={Request} 
       options={
         { title: 'Participant Request' }
       }
      />
      <Stack.Screen 
       name="PList" 
       component={PList} 
       options={
         { title: 'Participant List' }
       }
      />
      <Stack.Screen 
       name="listprog" 
       component={listprog} 
       options={
         { title: 'List of Programs' }
       }
      />
      <Stack.Screen 
       name="profile" 
       component={ProfileScreen} 
       options={
         { title: 'User Profile' }
       }
      />
      <Stack.Screen 
       name="editprofile" 
       component={EditProfileScreen} 
       options={
         { title: 'Edit Profile' }
       }
      />
      <Stack.Screen 
       name="listOrg" 
       component={ListOrg} 
       options={
         { title: 'List of Organizations' }
       }
      />
      <Stack.Screen 
       name="JoinProgram" 
       component={JoinProgram} 
       options={
         { title: 'Join Program' }
       }
      />
      <Stack.Screen 
       name="joinprogramlist" 
       component={joinprogramlist} 
       options={
         { title: 'Join Program' }
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}