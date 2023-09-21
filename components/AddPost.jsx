import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from 'react-native';

export default function Post({handleSubmit}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Add Post</Text>
        <TextInput
          style={styles.textField}
          onChangeText={val => setTitle(val)}
          value={title}
          placeholder="Enter title"
        />
        <TextInput
          style={styles.textField}
          onChangeText={val => setBody(val)}
          value={body}
          placeholder="Enter body"
        />
        <Button
          title="Submit"
          onPress={() => handleSubmit({title, body})}
          color="black"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
  textField: {
    borderWidth: 0.5,
    margin: 5,
  },
});
