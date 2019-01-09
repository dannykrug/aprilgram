import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#7fffc1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600'
  }
};

export default Header;
