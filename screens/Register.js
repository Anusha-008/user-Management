import { View,Image, Text,StyleSheet, TextInput, TouchableOpacity, Alert ,ImageBackground} from 'react-native'
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Register = ({navigation}) => {
    
    const[userDetails,setuserDetails]=useState({
        name:'',
        password:'',
        email:''
    });
    const onChangeHandler = (val,key) => {
    console.log('val', val)
        setuserDetails({
            ...userDetails,
            [key] : val
        })
    }
    
    const storeData = async ({name,password,email}) => {
        if (name && password && email){
        console.log('userDetail', userDetails)
               
        let store =JSON.parse(await AsyncStorage.getItem('key')) ? JSON.parse(await AsyncStorage.getItem('key')) : [];
            store.unshift(userDetails);
            console.log('store', store);
            await AsyncStorage.setItem('key', JSON.stringify(store))
            Alert.alert('Sucessfully Registered');
        }else{
            Alert.alert('Please fill form');
        }
    }
    
    const regNav = () => {
        navigation.navigate('login')
    }

    return (<View style={{flex:1}}>
    <ImageBackground 
                source={require('../assets/images/background.jpg')}
                style={{width: 400, height: 800}} 
            >
        <View style= {styles.mainContainer}>
            
            <Text style={styles.mainHeader}>Register Form</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your name</Text>
                <TextInput style={styles.inputStyle} 
                    autoCapitalize="none" autoCorrect={false}
                    value={userDetails.name}
                    onChangeText={(val)=>{onChangeHandler(val,'name')}}/>
            </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your password</Text>
            <TextInput style={styles.inputStyle} 
                autoCorrect={false}
                secureTextEntry={true}
                value={userDetails.password}
                onChangeText={(val)=>{onChangeHandler(val,'password')}}/>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter your email</Text>
            <TextInput style={styles.inputStyle} 
                autoCapitalize="none" autoCorrect={false}
                value={userDetails.email}
                onChangeText={(val)=>{onChangeHandler(val,'email')}}/>
        </View>

        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => storeData(userDetails)}>
            <Text >Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>regNav()}>
            <Text style={styles.buttonText}>Login Here</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>

    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor:"transfarent",
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
        color:"#100C08",
        marginTop:10,
        marginBottom:5,
        lineHeight:25,
     
    },
    inputStyle:{
        borderWidth:5,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
        fontSize:18,
        
    },
   
    buttonStyle:{
        
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop:20,
        marginBottom:5,
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:"#43ff64d9",
        fontSize:18,
    },
    buttonText:{
        alignItems:'center',
        textAlign:'center',
        marginTop:20,
        color:"#145cc8",
        fontSize:18,
    }
})
export default Register;

