import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from"react-navigation-stack";
import { createAppContainer } from"react-navigation";
import { Component } from 'react';

export default class ProfileScreen extends Component {

  state = {
    color1: '#1B78FE',
    color2: 'black',
    color3: 'green',
    name: ' ',
    bio: ' ',
    age:' ',
    contactnumber:' ',
    nationality:' ',
  };

  handlePress = () => {
    this.setState({ color3: 'purple' });
    this.props.navigation.navigate('editprofile', {
      name: this.state.name,
      age: this.state.age,
      contactnumber:this.state.contactnumber,
      nationality:this.state.nationality,
      bio: this.state.bio,
      
      saveEditedProfile: this.saveEditedProfile,
    });
  };

  saveEditedProfile = (name,age,contactnumber,nationality, bio) => {
    this.setState({
      name: name,
      age:age,
      contactnumber:contactnumber,
      nationality:nationality,
      bio: bio,
      
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 30,
          //flex: 1,
          justifyContent: 'center',
          backgroundColor: '#EEEEFF',
        }}>
        
        <Image style={styles.picture} source={require('../assets/profile.jpg')} />
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.age}>{this.state.age}</Text>
        <Text style={styles.age}>{this.state.contactnumber}</Text>
        <Text style={styles.age}>{this.state.nationality}</Text>
        <Text style={styles.bio}>{this.state.bio}</Text>

        <TouchableOpacity style={styles.item} onPress={this.handlePress}>
            <Text style={styles.buttonText}>
              Update
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  picture: {
    height: 128,
    width: 128,
    borderRadius: 30,
    borderWidth: 1,
  },
  name: {
  alignSelf:'center',
  flexDirection:'row',
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
  bio: {
    alignSelf:'center',
    flexDirection:'row',
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
  age: {
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'90%',
    padding:20,
    borderRadius:10,
    shadowOpacity:150,
    elevation:15,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center'
    },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    // backgroundColor:'#3740FE',
    // alignSelf:'center',
    // flexDirection:'row',
    // justifyContent:'center',
    // width:'410%',
    // padding:20,
    // borderRadius:10,
    // shadowOpacity:80,
    // elevation:15,
    // marginTop:20,
    // marginBottom:20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#3740FE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    witdth: "100%",
    borderRadius: 10,
  },
});

// const ProfileStack = createStackNavigator({
//   Profile: ProfileScreen,
//   Edit: EditProfileScreen,
// });

// const App = createAppContainer(ProfileStack);
// export default App;

