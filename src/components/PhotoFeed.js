import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

class PhotoFeed extends Component {

  state = { photos: [] };

  componentWillMount() {
    fetch('http://localhost:3000/photos')
    .then(res => res.json())
    .then(console.log);
  }

  render() {
    return (
      <View>
        <Text>Photos Go Here</Text>
        <Image
        style={styles.imageStyle}
        source={{ uri: 'https://i.imgur.com/T3FGNqF.png' }}
        />
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    height: 350,
    width: 350
  }
};

export default PhotoFeed;
