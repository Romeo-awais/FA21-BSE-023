import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const StudentRecordsApp = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [searchName, setSearchName] = useState('');

  const addStudent = () => {
    if (name.trim() !== '') {
      setStudents([...students, { id: Date.now(), name: name }]);
      setName('');
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const searchStudent = () => {
    const foundStudent = students.find(student => student.name === searchName);
    if (foundStudent) {
      Alert.alert('Student Found', `ID: ${foundStudent.id}, Name: ${foundStudent.name}`);
    } else {
      Alert.alert('Student Not Found', 'No student found with the provided name.');
    }
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity onPress={() => deleteStudent(item.id)} style={styles.studentItem}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Records App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Student Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity onPress={addStudent} style={styles.button}>
        <Text style={styles.buttonText}>Add Student</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search Student Name"
        value={searchName}
        onChangeText={(text) => setSearchName(text)}
      />
      <TouchableOpacity onPress={searchStudent} style={styles.button}>
        <Text style={styles.buttonText}>Search Student</Text>
      </TouchableOpacity>
      <FlatList
        data={students}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  studentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default StudentRecordsApp;
