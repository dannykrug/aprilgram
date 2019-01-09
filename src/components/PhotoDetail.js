import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const PhotoDetail = ({ photo }) => {
  console.log(photo.title);
  return (
    <Card>
      <CardSection>
        <Text>{photo.title}</Text>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: photo.img }} />
      </CardSection>

      <CardSection>
        <View style={styles.likesCaptionContentStyle}>
          <Text>{photo.likes} likes</Text>
          <Text>{photo.caption}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

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

export default PhotoDetail;
