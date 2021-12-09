import { StatusBar } from 'expo-status-bar'
import React,{ useState,useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button,Input,Image } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
    const [name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[imageUrl,setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to login",
        });
    }, [navigation])

    const register = () =>{

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{ marginBottom:50 }}>
                Create a signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Full Name"
                autofocus
                type="text"
                value={name}
                onChangeText={(text)=>setName(text)}
                />
                <Input 
                placeholder="Email"
                type="email"
                value={email}
                onChangeText={(text)=>setEmail(text)}
                />
                <Input 
                placeholder="Password"
                secureTextEntry
                type="password"
                value={password}
                onChangeText={(text)=>setPassword(text)}
                />
                <Input 
                placeholder="Profile picture(optional)"
                type="text"
                value={imageUrl}
                onChangeText={(text)=>setImageUrl(text)}
                onSubmitEditing ={register}
                />
            </View>
            <Button raised title="Register" onPress={register} style={styles.button}/>
            <View style={{ height:100 }}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
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
    },
    inputContainer:{
        width: 300
    }
})
