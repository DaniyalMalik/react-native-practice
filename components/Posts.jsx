import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import Post from './Post';
import AddPost from './AddPost';

export default function Body() {
  const [posts, setPosts] = useState([]);

  async function request() {
    try {
      const res = await axios.get('http://192.168.69.235:3000/posts');

      setPosts(res.data);
    } catch (error) {
      console.log(error, 'error');
    }
  }

  async function handleDelete(id) {
    const res = await axios.delete('http://192.168.69.235:3000/posts/' + id);

    setPosts(res.data);
  }

  async function handleSubmit(payload) {
    if (payload.title && payload.body) {
      const res = await axios.post('http://192.168.69.235:3000/posts', payload);

      setPosts(res.data);
    } else {
      Alert.alert('All fields are required!');
    }
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={styles.container}>
      <AddPost handleSubmit={handleSubmit} />
      <Text style={styles.text}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Post item={item} handleDelete={handleDelete} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
});
