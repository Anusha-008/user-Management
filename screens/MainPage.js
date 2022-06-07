import React from "react";
import { useSelector} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerScreen from "./MainDrawerScreen";
import { RegisterStackScreen } from "./MainTabScreen";


export const MainPage = () => {
  const users = useSelector((state)=>state.isloggedIn);
  console.log(users);
return(
  <NavigationContainer>
     {users?<MainDrawerScreen/>:<RegisterStackScreen/>}
  </NavigationContainer>
)
}