import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';

export default function RegisterScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [telefono, setTelefono] = useState('');

  function registro() {
    if (!correo || !contrasenia || !nombreUsuario || !telefono) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al registrar usuario:', errorCode, errorMessage);
        Alert.alert('Error', errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRO</Text>

      <TextInput
        style={styles.input}
        placeholder='Nombre de usuario'
        onChangeText={(texto) => setNombreUsuario(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='Correo electrónico'
        onChangeText={(texto) => setCorreo(texto)}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        onChangeText={(texto) => setContrasenia(texto)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder='Teléfono'
        onChangeText={(texto) => setTelefono(texto)}
        keyboardType='phone-pad'
      />

      <Button title='Registrar' onPress={registro} />
    </View>
  );
}

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
  computer: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
});