import React from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';


export default function Createaccount({navigation}) {
  return (
    <View style={styles.container}>
        <TextInput placeholder="Name" style={{borderColor: 'black', borderWidth: 1, padding:10, borderRadius:9}} />
        <View style={{paddingTop:10}}><TextInput placeholder="Email" style={{borderColor: 'black', borderWidth: 1, padding:10, borderRadius:9}} /></View>
        <View style={{paddingTop:10}}><TextInput placeholder="Phone no." keyboardType={'phone-pad'} style={{borderColor: 'black', borderWidth: 1, padding:10, borderRadius:9}} /></View>
        <View style={{paddingTop:10}}><TextInput placeholder="Password" secureTextEntry={true} style={{borderColor: 'black', borderWidth: 1, padding:10, borderRadius:9}} /></View>
        <View style={{paddingTop:10}}><TextInput placeholder="Confirm Password" secureTextEntry={true} style={{borderColor: 'black', borderWidth: 1, padding:10, borderRadius:9}} /></View>
        <View style={styles.b}><Button title="Submit" /></View>
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
  }

})