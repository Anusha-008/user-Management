import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { MainTabScreen } from './MainTabScreen';
import { DetailsTabScreen } from './MainTabScreen';
import { userLogout } from '../store/action';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch=useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
      label="Log Out" onPress={() => dispatch(userLogout())} />
      
    </DrawerContentScrollView>
  );
}
const MainDrawerScreen = () =>{
  return(
   
      
      <Drawer.Navigator initialRouteName='Home' useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} options={{headerShown:false, drawerIcon: ({focused, size}) => (
              <Icon 
                 name="home"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />),}}/>
        <Drawer.Screen name="Details" component={DetailsTabScreen} options={{headerShown:false,drawerIcon: ({focused, size}) => (
              <Icon 
                 name="bell"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />),}}/>
      </Drawer.Navigator>
   
  )
}


export default MainDrawerScreen;