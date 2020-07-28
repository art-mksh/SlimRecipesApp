import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ViewIngredientsButton extends React.Component {
  render() {
    
    return (
      <View 
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' style={{borderRadius: 100}} onPress={this.props.onPress}>
            <View style={[styles.container, {backgroundColor: this.props.button_color}] }>
              <Text style={styles.text}>Посмотреть ингредиенты</Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
