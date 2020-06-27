import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';


export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./categoryImages/guide.jpg')} />
        <View style={styles.button}><Button title="Next" onPress={() => navigation.navigate('Register')} /></View>
      </View>   
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop:50,
    padding: 10,
    backgroundColor: '#f5deb3',
  },
  button: {
    paddingTop:10,
    width: '100%',
    borderRadius: 50,
 },
  logo: {
    width: 375,
    height: 350,
    resizeMode: 'stretch',
    borderRadius:15,
  }

})