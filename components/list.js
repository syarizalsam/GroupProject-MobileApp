'use strict';
import React, {useState,useEffect, Component} from 'react';
import {StyleSheet, Text, Container, Content, View} from 'react-native';
import firebase from '../database/firebase';
import GetList from './getList';

const list=()=>{
  // const [myList,setMylist]=useState([])

  // useEffect(()=>{
  //   loadParticipantList()
  // },[])

  // const loadParticipantList=()=>{
  //   var participantRef = firebase.database().ref('programs');
  //   participantRef.on('value', function(snapshot){
  //     snapshot.forEach(function(element){
  //       let data = element.val();
  //       let firebaseData = Object.values(data);
  //    setMylist(firebaseData)
  //       console.log(myList);
  //    });
  // })
  // }

  return(
    <View>
     <GetList></GetList>
    </View>
  )
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
  });

  export default list;