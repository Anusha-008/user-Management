import { View,Image, Text,StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import{useDispatch} from 'react-redux';
import { userLogin} from '../store/action';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const SignUpScreen = ({navigation}) => {
    const [name,setUserName] = useState("anu");
    const [password,setPassword] = useState("123");

    const dispatch= useDispatch() ;

    const submit =async ()=>{
        let user = JSON.parse(await AsyncStorage.getItem('key')) ;
        console.log(user);
        // console.log('name', name)
        // console.log('pass', password)
        
        const act_user = user.filter((e) => name == e.name && password == e.password)
        console.log(act_user);
        if(act_user.length !== 0){
            Alert.alert(`ThankYou ${name}`);
            dispatch(userLogin())
        }else{
            Alert.alert('Username and password is not correct');
        }
    };

    const loginHandler = () =>{
        navigation.navigate('register')
    }
    

  return (
    <View style= {styles.mainContainer}>
        <Text style={styles.mainHeader}>Login Form</Text>
        <Text style={styles.description}>You can reach us anytime via xyz@gmail.com</Text>
        <Image
        style={styles.logo}
        source={require('../assets/images/login.jpg')}
        />

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your name</Text>
            <TextInput style={styles.inputStyle} 
            autoCapitalize="none" autoCorrect={false}
            value={name}
            onChangeText={(actualData) => setUserName(actualData)}/>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your password</Text>
            <TextInput style={styles.inputStyle} 
             autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}/>
        </View>

       <TouchableOpacity style={styles.buttonStyle}
        onPress={() => submit()}>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => loginHandler()}>
        <Text style={styles.buttonText}>Register Here</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
       
        height:"100%",
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor:"#fff",
    },
    mainHeader:{
        fontSize:25,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,
        textTransform:"capitalize",
    },
    description:{
        fontSize:20,
        color:"#7d7d7d",
        paddingBottom:20,
        lineHeight:25,
      
    },
    inputContainer:{
        marginTop:20
    },
    
    labels:{
        fontSize:18,
        color:"#7d7d7d",
        marginTop:10,
        marginBottom:5,
        lineHeight:25,
     
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
        fontSize:18,
        
    },
    logo: {
        alignItems: "center",

        height:200,
        width:300

      },
    buttonStyle:{
        
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop:25,
       
        paddingHorizontal:15,
        paddingVertical:7,
        fontSize:18,
        backgroundColor:"#43ff64d9",
        
    },
    buttonText:{
        alignItems:'center',
        textAlign:'center',
        marginTop:20,
        color:"#145cc8",
        fontSize:18,
    }
})
export default SignUpScreen