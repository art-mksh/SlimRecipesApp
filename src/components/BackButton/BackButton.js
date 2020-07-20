import React from 'react';
import { TouchableHighlight, Image, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default class BackButton extends React.Component {

  render() {

    const FaIconsSize = 35;
    const FaIconsMargin = 0;

    return (
      <TouchableOpacity  
      //underlayColor='rgba(73,182,77,0.9)'  
      onPress={this.props.onPress} 
      style={styles.btnContainer}>
        
            <FontAwesomeIcon  style={{color:'white', margin:FaIconsMargin,}} size={ FaIconsSize } icon={ faArrowLeft }  />
            
      </TouchableOpacity>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
