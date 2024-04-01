import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1')}
      >
        <Text style={styles.buttonText}>Go to Screen 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
