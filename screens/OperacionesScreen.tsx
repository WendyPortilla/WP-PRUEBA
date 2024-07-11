import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';

const Operaciones = () => {
  const [idOperacion, setIdOperacion] = useState('');
  const [monto, setMonto] = useState('');
  const [tipoOperacion, setTipoOperacion] = useState('');
  const [comentario, setComentario] = useState('');
  const [operaciones, setOperaciones] = useState([]);

  const handleGuardarOperacion = () => {
    const montoNumber = parseFloat(monto);
    if (isNaN(montoNumber)) {
      Alert.alert('Error', 'El monto debe ser un número');
      return;
    }

    if (montoNumber < 0) {
      Alert.alert('Error', 'No se permiten montos negativos');
      return;
    }

    if (montoNumber > 500) {
      Alert.alert(
        'Confirmación',
        '¿Desea continuar con la transacción?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => {
              guardarOperacion();
            },
          },
        ]
      );
    } else {
      guardarOperacion();
    }
  };

  const guardarOperacion = () => {
    const nuevaOperacion = {
      idOperacion,
      monto,
      tipoOperacion,
      comentario,
    };
    setOperaciones([...operaciones, nuevaOperacion]);
    Alert.alert('Éxito', 'Operación realizada con éxito');
    setIdOperacion('');
    setMonto('');
    setTipoOperacion('');
    setComentario('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Operaciones</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <Text style={styles.inputText}>Id operación</Text>
          <TextInput
            style={styles.input}
            value={idOperacion}
            onChangeText={(text) => setIdOperacion(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Monto</Text>
          <TextInput
            style={styles.input}
            value={monto}
            onChangeText={(text) => setMonto(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Tipo operación</Text>
          <TextInput
            style={styles.input}
            value={tipoOperacion}
            onChangeText={(text) => setTipoOperacion(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Comentario</Text>
          <TextInput
            style={styles.input}
            value={comentario}
            onChangeText={(text) => setComentario(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGuardarOperacion}>
          <Text style={styles.buttonText}>Ejecutar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.operaciones}>
        {operaciones.map((operacion, index) => (
          <View key={index} style={styles.operacion}>
            <Text>Id operación: {operacion.idOperacion}</Text>
            <Text>Monto: {operacion.monto}</Text>
            <Text>Tipo operación: {operacion.tipoOperacion}</Text>
            <Text>Comentario: {operacion.comentario}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  operaciones: {
    padding: 20,
  },
  operacion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Operaciones;