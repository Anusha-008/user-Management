import { StyleSheet,SafeAreaView,ScrollView, Text, View,Button } from 'react-native';

const DetailsScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button title='Go to Details screen.. again'
        onPress={() => navigation.push("Details")}/>
        <Button title='Go to Home'
        onPress={() => navigation.navigate("Home")}/>
        <Button title='Go back'
        onPress={() => navigation.goBack()}/>
        
      </View>
    );
  };
  export default DetailsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  