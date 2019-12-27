import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Luiz Junior',
      email: 'luizjunior@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'John Ray',
        comment: 'Stunning!'
      }, {
        nickname: 'Ana Julia',
        comment: 'Foto Linda, onde foi tirada?'
      }]
    }, {
      id: Math.random(),
      nickname: 'Danilo Fit',
      email: 'danilofit@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: [],
    }]
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Feed;
