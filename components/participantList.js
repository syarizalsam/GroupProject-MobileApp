'use strict';
import React, {useState,useEffect, Component} from 'react';
import {StyleSheet, Text, Container, Content, View,FlatList} from 'react-native';
import firebase from '../database/firebase';

const image = { uri: "https://reactjs.org/logo-og.png" };
const ParticipantList=({navigation, route})=>{
  const [myList,setMylist]=useState([])

  useEffect(()=>{
    var participantRef = firebase.database().ref('/programs' + route.params.programName);
    participantRef.on('value', function(snapshot){
 
        let data = snapshot.val();
        let firebaseData = Object.values(data);
         setMylist(firebaseData)
  })
  },[])

  

  const Item = ({participantID,participantEmail}) => (
    <View style={styles.container}>
      <Text style = {styles.box}>
              <div>Participant ID: {participantID}</div>
              <div>Participan name: {participantEmail}</div>
              <br></br>
      </Text>
    </View>
  );
  

    const renderItem = ({ item }) => (
      <Item 
      participantID={item.participantID}
      participantEmail={item.participantEmail}
      />
    );
  
 

  return(
    <View>
        <FlatList
        data={myList}
        renderItem={renderItem}
        keyExtractor={item => item.participantID}
      />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
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
  box: {
    height: 80,
    width: '100%',
    alignItems:'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#D433FF"
  },
  });

  export default ParticipantList;