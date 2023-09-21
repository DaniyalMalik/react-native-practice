import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Post({item, handleDelete}) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.heading}>
          S. No.:&nbsp;
          <Text style={styles.body}>{item.id}</Text>
        </Text>
        <Text style={styles.heading}>
          Title:&nbsp;
          <Text style={styles.body}>{item.title}</Text>
        </Text>
        <Text style={styles.heading}>
          Body:&nbsp;
          <Text style={styles.body}>{item.body}</Text>
        </Text>
      </View>
      <Icon
        name="remove"
        size={30}
        color="firebrick"
        onPress={() => handleDelete(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'lightgrey',
    margin: 5,
    padding: 5,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
    fontWeight: '300',
  },
});
