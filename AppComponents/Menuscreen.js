import React from 'react';
import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image} from 'react-native';


export default function Menuscreen({navigation}) {
  return (
    <View style={styles.MainContainer}>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image
           source={require('./categoryImages/college.png')}
           style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}>Colleges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
          <Image
            source={require('./categoryImages/ranking.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}>Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image
           source={require('./categoryImages/test.png')}
           style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}>Exam Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
          <Image
            source={require('./categoryImages/question.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}>Query</Text>
        </TouchableOpacity>
      </View> 
  );
}

const styles = StyleSheet.create({
MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 10,
    backgroundColor: '#f5deb3',
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    width: 320,
    borderRadius: 5,
    margin: 5,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    width: 320,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 5,
    margin: 5,
    height: 65,
    width: 65,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 40,
    fontSize: 22,
    paddingLeft:10,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 60,
  },
});