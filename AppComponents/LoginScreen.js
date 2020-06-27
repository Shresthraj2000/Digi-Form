import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';


export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./categoryImages/pen.jpg')} />
        <View style={styles.b}><Button title="Login" onPress={() => navigation.navigate('Login')}/></View>
        <Text style={styles.text}> OR</Text>
        <View style={styles.b}><Button title="Create Account" onPress={() => navigation.navigate('Create_Account')}/></View>
      </View>   
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop:50,
    padding: 60,
    backgroundColor: '#f5deb3',
  },
  b: {
    paddingTop:30,
  },
  logo: {
    width: 275,
    height: 250,
    resizeMode: 'stretch',
    borderRadius:15,
  },
  text: {
    paddingTop:10,
    paddingLeft: 125,
  }

})