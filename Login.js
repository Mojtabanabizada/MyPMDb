/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {auth} from '../firebase';
const Login = () => {
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')

  // const handleSignUp = () => {
  //   auth.creatUserWithEmailAndPassword(email, password)
  //   .then(userCredentials =>{
  //     const user = userCredentials.user;
  //     console.log(user.email);
  //   })
  //   .catch(error => alert(error.message))
  // }
  return (
    
    <View
     style={styles.container}
     behavior="padding"
     >
       <View style={styles.titleContainer}>
         <Text style={styles.signUpText}>Sign up to</Text>
         <Text style={styles.myPMDbUpText}>My PMDb</Text>
       </View>
       <View style={styles.inputContainer}>
         <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
         />
                  <TextInput
          placeholder="Password"
          value={ password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
         />

       </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => { }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={styles.register}
          >
            <Text >Register</Text>
          </TouchableOpacity>

        </View>      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4ECE8',
  },
  titleContainer: {
    alignItems: 'flex-start',
    width: '80%',
    marginTop: 60,
  },
  signUpText: {
    fontSize: 25,
    fontWeight: '900',
    fontFamily: 'Poppins',
    color: 'black',
    marginBottom: 30,
  },
  myPMDbUpText:{
    color: 'black',
    fontSize: 36,
    fontWeight: '900',
    fontFamily: 'Poppins',
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#6B3A2A',
    width: '100%',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },

});
