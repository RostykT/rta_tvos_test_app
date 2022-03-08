/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

import {useState} from 'react';

const LoginScreen = ({setLoginView}) => {
  const [error, SetError] = useState(false);
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const userAdmin = {
    email: 'roku@',
    password: 'roku',
  };
  const handleSubmit = () => {
    if (email === userAdmin.email && password === userAdmin.password) {
      setLoginView(true);
      SetError(false);
    } else {
      SetError(true);
    }
  };
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
    },
    button: {
      marginTop: 10,
      backgroundColor: '#316B83',
      width: windowWidth / 2,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    input: {
      width: windowWidth / 2,
      borderColor: error ? 'red' : '#D1D1D1',
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 5,
      padding: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
    },
  });
  console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={text => SetEmail(text)}
        />
        {error && (
          <Text style={styles.errorText}>Incorrect password or email</Text>
        )}
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={text => SetPassword(text)}
        />
        {error && (
          <Text style={styles.errorText}>Incorrect password or email</Text>
        )}
      </View>
      <TouchableHighlight
        onPress={handleSubmit}
        style={styles.button}
        underlayColor="green">
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;
