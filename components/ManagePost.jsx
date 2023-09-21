import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';

export default function Post({post, handleSubmit, setPost}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (Object.keys(post).length > 0) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {Object.keys(post).length > 0 ? 'Edit Post' : 'Add Post'}
        </Text>
        <TextInput
          style={styles.textField}
          defaultValue={title}
          onChangeText={val => setTitle(val)}
          value={title}
          placeholder="Enter title"
        />
        <TextInput
          style={styles.textField}
          onChangeText={val => setBody(val)}
          defaultValue={body}
          value={body}
          multiline
          placeholder="Enter body"
        />
        <Button
          title={Object.keys(post).length > 0 ? 'Edit' : 'Submit'}
          onPress={() => {
            const res = handleSubmit({title, body});

            if (res) {
              setTitle('');
              setBody('');

              if (Object.keys(post).length > 0) {
                setPost({});
              }
            }
          }}
          color="green"
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
