import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../store/actions/user'; 

class Login extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  login = () => {
    this.props.onLogin({ ...this.state });
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoFocus={true}
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => this.props.navigation.navigate('Register') }
        >
          <Text style={styles.buttonText}>Nova conta</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20, 
    color: '#FFF'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user)),
  }
};
  // bindActionCreators(, dispatch);

export default connect(null, mapDispatchToProps) (Login);
