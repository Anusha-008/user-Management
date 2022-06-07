import { StyleSheet,SafeAreaView,ScrollView, Text, View,Button } from 'react-native';

const HomeScreen = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Go to Details screen'
      onPress={() => navigation.navigate("Details")}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
  