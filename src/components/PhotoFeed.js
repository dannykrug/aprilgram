import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PhotoDetail from './PhotoDetail';

class PhotoFeed extends Component {

  state = { photos: [] };

  componentWillMount() {
    fetch('http://localhost:3000/photos')
    .then(res => res.json())
    .then(res => this.setState({ photos: res }));
  }

  renderPhotos() {
    return this.state.photos.map(photo =>
      <PhotoDetail key={photo.id} photo={photo} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderPhotos()}
      </ScrollView>
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
