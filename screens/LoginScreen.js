import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button,Input,Image } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = () =>{

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style= "light"/>
            <Image 
            source = {{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Signal_ultramarine_icon.svg/1200px-Signal_ultramarine_icon.svg.png",
            }}
            style={{
                width: 200,
                height: 200
            }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)}/>
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn}/>
            <Button containerStyle={styles.button} type="outline" title="Register" onPress={()=> navigation.navigate('Register')}/>
            <View style={{ height:100 }}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    }
})
