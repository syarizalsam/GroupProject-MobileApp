'use strict';
import React, {useState,useEffect, Component} from 'react';
import {StyleSheet, Text, Container, Content, View,FlatList} from 'react-native';
import firebase from '../database/firebase';

const getlist=()=>{
  const [myList,setMylist]=useState([])

  useEffect(()=>{
    loadParticipantList()
  },[])

  const loadParticipantList=()=>{
    var participantRef = firebase.database().ref('/programs');
    participantRef.on('value', function(snapshot){
 
        let data = snapshot.val();
        let firebaseData = Object.values(data);
         setMylist(firebaseData)
       
   
  })
  }

  const Item = ({ programDate,programName ,programTime}) => (
    <View style={styles.container}>
      <Text >{programDate}</Text>
      <Text >{programName}</Text>
      <Text >{programTime}</Text>
      <Text >-------------------</Text>
      
    </View>
  );
  

    const renderItem = ({ item }) => (
      <Item programDate={item.programDate} 
      programName={item.programName}
      programTime={item.programTime}/>
      
    );
  
 

  return(
    <View>
        <FlatList
        data={myList}
        renderItem={renderItem}
        keyExtractor={item => item.programDate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        alignSelf:'center',
  justifyContent:'center',
  backgroundColor:'#fff',
  width:'90%',
  padding:20,
  borderRadius:10,
  shadowOpacity:80,
  elevation:15,
  marginTop:20,
  marginBottom:20,
  textAlign: 'center'
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

  export default getlist;
