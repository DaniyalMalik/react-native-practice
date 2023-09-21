import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import axios from 'axios';
import Post from './Post';
import ManagePost from './ManagePost';

export default function Body() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  async function request() {
    try {
      const res = await axios.get('http://192.168.69.235:3000/posts');

      setPosts(res.data);
    } catch (error) {
      console.log(error, 'error');
    }
  }

  async function handleDelete(id) {
    console.log(id, 'id');
    const res = await axios.delete('http://192.168.69.235:3000/posts/' + id);

    setPosts(res.data);
  }

  async function handleSubmit(payload) {
    if (payload.title && payload.body) {
      const res = await axios.post('http://192.168.69.235:3000/posts', payload);

      if (Object.keys(post).length > 0) Alert.alert('Post updated!');
      else Alert.alert('New post added!');

      setPosts(res.data);

      return true;
    } else {
      Alert.alert('All fields are required!');

      return false;
    }
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={styles.container}>
      <ManagePost post={post} handleSubmit={handleSubmit} setPost={setPost} />
      <Text style={styles.text}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Post item={item} handleDelete={handleDelete} setPost={setPost} />
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
