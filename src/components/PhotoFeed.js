import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

class PhotoFeed extends Component {
  render() {
    return (
      <View>
        <Text>Photos Go Here</Text>
        <Image
        style={styles.imageStyle}
        source={{ uri: 'http://www.cutestpaw.com/wp-content/uploads/2016/05/POOF-puppy.jpeg' }}
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
