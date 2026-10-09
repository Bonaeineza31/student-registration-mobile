import {useState} from 'react';
import { View , Text, TextInput, Button, StyleSheet} from 'react-native';


export default function App() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');


  const Register = () => {
    if (!name.trim() || !email.trim() || !course.trim()) {
      alert('Please fill in all fields');
      return;
    }
    // Proceed with registration logic
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Registration Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={(text) => setCourse(text)}
      />
      <Button title="Register" onPress={Register} />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },


  });
    



