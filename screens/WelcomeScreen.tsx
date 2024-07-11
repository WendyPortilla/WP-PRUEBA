import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <View style={styles.house}>
        <View style={styles.window} />
        <View style={styles.window} />
        <View style={styles.dollar} />
      </View>
      <Button title="LOGIN" onPress={() => navigation.navigate('Login')} />
      <Button title="REGISTRO" onPress={() => navigation.navigate('Register')} />
      <Text style={styles.developed}>Desarrollado por: Wendy Portilla</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  house: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
  },
  window: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  dollar: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    top: 50,
    left: 45,
  },
  developed: {
    marginTop: 20,
    fontSize: 12,
  },
});

export default WelcomeScreen;