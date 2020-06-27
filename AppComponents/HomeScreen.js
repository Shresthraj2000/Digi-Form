import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
  	<View style={styles.container}>
  	<Image
        style={styles.logo}
        source={require('./categoryImages/girl.jpg')} />
        <Text style={styles.heading}>Knowledge </Text>
        <Text style={styles.text}>We provide all the information regarding MCA entrances! </Text>
    <View style={styles.button}><Button title="Next" onPress={() => navigation.navigate('About')} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5deb3',
  },
  heading: {
    paddingTop: 30,
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 130,
  },
  text: {
    paddingTop:10,
    paddingLeft: 30,
  },
  button: {
    paddingTop:10,
    width: '100%',
  },
  logo: {
    width: 350,
    height: 300,
    borderRadius:15,
  }

})