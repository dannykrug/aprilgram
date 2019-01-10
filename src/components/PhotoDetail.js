import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  likesCaptionContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

class PhotoDetail extends Component {

  render() {
    let likes = this.props.photo.likes;

    const addLike = () => {
      likes += 1;
      console.log(likes);
    };

    console.log(this.props);
  return (
    <Card>
      <CardSection>
        <Text>{this.props.photo.title}</Text>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: this.props.photo.img }} />
      </CardSection>

      <CardSection>
        <View style={styles.likesCaptionContentStyle}>
          <Button onPress={addLike}>Like</Button>
          <Text>{likes} likes</Text>
          <Text>{this.props.photo.caption}</Text>
        </View>
      </CardSection>
    </Card>
  );
}

}

export default PhotoDetail;
