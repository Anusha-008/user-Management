import { StyleSheet,SafeAreaView,ScrollView, Text, View,Button } from 'react-native';

const ProfileScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })