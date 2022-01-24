// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';

export default class DashboardAdmin extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Sign In (Admin)')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

    <TouchableOpacity 
    style={styles.item}
    >
    <Text
      style={styles.buttonStyle}
      onPress={() => this.props.navigation.navigate('Program')}>
      Add a program
      </Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
    style={styles.item}
    >
    <Text
      style={styles.buttonStyle}
      onPress={() => this.props.navigation.navigate('PList')}>
      Participant List
      </Text>
    </TouchableOpacity>
    
      <View style={styles.signoutButton}>
        <Button
          color="#3740FE"
          title="Logout"
          padding = "10"
          onPress={() => this.signOut()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#EEEEFF',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 20
  },
  item: {
    backgroundColor: '#3740FE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    witdth: 100,
    borderRadius: 10,
  },
  buttonStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  signoutButton: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginHorizontal: 16,
  }
});