'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import firebase from '../database/firebase';

export default class Program extends Component {
  constructor(props){
    super(props);
    this.state = ({
        programID : ''
    })
}

addProgram(programID, programName, programTime, programDate, programDetails){
    firebase.database().ref('/programs').push({
      programID,
      programName,
      programTime,
      programDate, 
      programDetails
    }).then((data) => {
        console.log('data', data)
    }).catch((error) => {
        console.log('error', error)
    })
}

render(){

    const showAlert = () =>{
        Alert.alert(
           'Successfully Booked'
        )
     }

    return(
        <View style={styles.container}>

        <View style = {{flex : 1, justifyContent : 'flex-start', alignItems : 'center', height: 260, paddingVertical: 30}}>
          
            <View style={styles.row}>
                <View style={styles.col1}><Text style={styles.text1}>Program ID: </Text></View>
                <View style={{width: '60%'}}><TextInput style={styles.textinput} required placeholder = "Enter ID" onChangeText = {( programID) => this.setState({ programID})}/></View>
            </View>
            <View style={styles.row}>
                <View style={styles.col1}><Text style={styles.text1}>Program Name: </Text></View>
                <View style={{width: '60%'}}><TextInput style={styles.textinput} required placeholder = "Enter name" onChangeText = {( programName) => this.setState({ programName})}/></View>
            </View>

            <View style={styles.row}>
                <View style={styles.col1}><Text style={styles.text1}>Program Date: </Text></View>
                <View style={{width: '60%'}}><TextInput style={styles.textinput} required placeholder = "Enter Date" onChangeText = {(programTime) => this.setState({programTime})}/></View>
            </View>

            <View style={styles.row}>
                <View style={styles.col1}><Text style={styles.text1}>Program Time: </Text></View>
                <View style={{width: '60%'}}><TextInput style={styles.textinput} required placeholder = "Enter Time" onChangeText = {(programDate) => this.setState({programDate})}/></View>
            </View>

            <View style={styles.row}>
                <View style={styles.col1}><Text style={styles.text1}>Program Details: </Text></View>
                <View style={{width: '60%'}}><TextInput style={styles.textinput} required placeholder = "Enter Details" onChangeText = {( programDetails) => this.setState({ programDetails})}/></View>
            </View>
            

            <View style = {{marginTop : 25, width :'75%', flexDirection: 'row', }}>
                <View style={{width: '50%'}}></View>
                <View style={{width: '50%'}}>
                <Button
                color="#3740FE"
                title = "Add"
                TouchableOpacity onPress = {() => this.addProgram(this.state.programID, this.state.programName, this.state.programTime, this.state.programDate, this.state.programDetails) && Alert.alert('Successfully Booked')}
                />
                </View>
            </View>
        </View>
    
        </View>
        
    );
}
  }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEEEFF',
      },
      header: {
      marginTop: 60,
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    textinput: {
      height: 35,
      width: '80%',
      fontSize: 14,
      borderWidth: 0.4,
      borderRadius: 3,
      borderColor: 'white',
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: 'white',
      paddingLeft: 6
  },

  row:{
      flexDirection: 'row', 
      width: '99%',
      marginTop: 10
  },

  col1: {
      width: '40%', 
      alignItems:'flex-end',
      justifyContent: 'center', 
      paddingRight: 10,
      fontSize: 18,
      fontColor : 'white'
  },
  })