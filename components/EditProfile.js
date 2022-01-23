import * as React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import { Component } from 'react';

export default class EditProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Volunteer Profile',
      headerRight: (
        <Button 
         
          onPress={navigation.getParam('saveProfile')}
          title="Save Profile"
          color="blue"
        />
      ),
    };
  };

  state = {
    name: ' ',
    age:' ',
    bio: ' ',
    contactnumber:' ',
    nationality:' ',
  };

  saveProfile = () => {
    this.props.navigation.state.params.saveEditedProfile(
      this.state.name,
      this.state.age,
      this.state.contactnumber,
      this.state.nationality,
      this.state.bio
    );
    this.props.navigation.navigate('Profile');
    alert('Profile Saved!');
  };

  componentWillMount() {
    this.setState({
      name: this.props.navigation.getParam(' '),
      age: this.props.navigation.getParam(' '),
      contactnumber: this.props.navigation.getParam(' '),
      nationality: this.props.navigation.getParam(' '),
      bio: this.props.navigation.getParam(' '),
    });
    this.props.navigation.setParams({ saveProfile: this.saveProfile });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 50,
        }}>
       <TextInput
          style={styles.edit}
          placeholder="Edit Profile"
         
        />
        <TextInput
          style={styles.name}
          placeholder="Update name:"
          multiline={false}
          onChangeText={text => {
            console.log(' '), this.setState({ name: text });
          }}
          value={this.state.name}
        />
        <TextInput
          style={styles.name}
          placeholder="Update age:"
          multiline={false}
          onChangeText={text => {
            console.log(' '), this.setState({ age: text });
          }}
          value={this.state.age}
        />
         <TextInput
          style={styles.name}
          placeholder="Update contact number:"
          multiline={false}
          onChangeText={text => {
            console.log(' '), this.setState({ contactnumber: text });
          }}
          value={this.state.contactnumber}
        />
         <TextInput
          style={styles.name}
          placeholder="Update nationality:"
          multiline={false}
          onChangeText={text => {
            console.log(' '), this.setState({ nationality: text });
          }}
          value={this.state.nationality}
        />
        <TextInput
          style={styles.bio}
          placeholder="Update a short bio"
          multiline={true}
          onChangeText={text => {
            console.log(' '), this.setState({ bio: text });
          }}
          value={this.state.bio}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    height: 256,
    width: 256,
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
    marginBottom:20
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
    marginBottom:20
    },

  edit: {
    margin: 24,
    padding: 10,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 350,
    borderColor: 'gray',
    
  },

});
