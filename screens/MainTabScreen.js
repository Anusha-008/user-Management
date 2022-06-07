import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity } from 'react-native';
import Register from './Register';
import SignUpScreen from './SignUpScreen';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const DetailsTab = createBottomTabNavigator();

export const HomeStackScreen =({navigation}) =>{
  return(
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} 
    options={({ navigation }) => ({ headerLeft: () => (
        
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={30} color="#900" />
      </TouchableOpacity>
    ),
    })}/>
  </HomeStack.Navigator>
  );
}

export const DetailsStackScreen =({navigation}) =>{
  return(
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    },defaultNavigationOptions: {
      title: 'Aligned Center'}
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen}
    options={({ navigation }) => ({ headerLeft: () => (
        
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={30} color="#900" />
      </TouchableOpacity>
    ),
    })}/>

</DetailsStack.Navigator>
  );
}

export const RegisterStackScreen =({navigation}) =>{
  
  return(
  <RegisterStack.Navigator initialRouteName='login'>
    <RegisterStack.Screen name="register" component={Register} options={{headerShown:false}}/>
    <RegisterStack.Screen name="login" component={SignUpScreen} options={{headerShown:false}}/>

  </RegisterStack.Navigator>
  );
}
export const MainTabScreen = () => {
    return(
        <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),headerShown:false
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),headerShown:false,
          tabBarBadge: 3,
        }}
      />

    </Tab.Navigator>
  );
}

export const DetailsTabScreen = () => {
  return(
      <DetailsTab.Navigator
    initialRouteName="Details"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
  >
    <DetailsTab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),headerShown:false
      }}
    />
    <DetailsTab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color, size }) => (
          <Icon name="bell" color={color} size={size} />
        ),headerShown:false,
        tabBarBadge: 3,
      }}
    />

  </DetailsTab.Navigator>
);
}