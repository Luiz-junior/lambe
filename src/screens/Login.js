import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  login = () => {
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

        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
  }
});

export default Login;