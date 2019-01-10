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

  state = { ...this.props.photo }


  render() {
    const addLike = () => {
      let newLikes = this.props.photo.likes;
      newLikes = (this.props.photo.likes += 1);
      this.setState({
        likes: newLikes
      });
    };

  console.log(this.state);

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
          <Text>{this.props.photo.likes} likes</Text>
          <Text>{this.props.photo.caption}</Text>
        </View>
      </CardSection>
    </Card>
  );
}

}

export default PhotoDetail;
