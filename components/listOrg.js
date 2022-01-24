import React from 'react';
import { Image, StyleSheet, Text, View,ScrollView } from 'react-native';

export default function ListOrg() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image source={require('../assets/logo1.png')} style={{ width: 305, height: 159, alignSelf: 'center' }} />
      
        <Text style={{
          color: 'black', 
          fontSize: 18,
          marginBottom:20,
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20}}> 
          INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA JOHOR STUDENT ASSOCIATION 
        </Text>
        <Image source={require('../assets/logo2.png')} style={{ width: 305, height: 159, alignSelf: 'center' }} />
      
        <Text style={{
          color: 'black', 
          fontSize: 18,
          marginBottom:20,
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20}}> 
          PERSATUAN SISWA ANAK KEDAH 
        </Text>
        <Image source={require('../assets/logo3.png')} style={{ width: 305, height: 159, alignSelf: 'center' }} />
      
        <Text style={{color: 'black', 
          fontSize: 18,
          marginBottom:20,
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
  }}> 
          PERSATUAN DARUL NAIM 
        </Text>
        <Image source={require('../assets/logo4.png')} style={{ width: 305, height: 159, alignSelf: 'center' }} />
      
        <Text style={{
          color: 'black', 
          fontSize: 18,
          marginBottom:20,
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
  
  }}> 
         IKATAN MAHASISWA ANAK MELAKA UIAM 
        </Text>
        </ScrollView>
      </View>
      
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });