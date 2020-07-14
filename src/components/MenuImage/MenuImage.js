import React from 'react';
import { TouchableOpacity, Image,ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default class MenuImage extends React.Component {
  render() {
    /*
    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={this.props.onPress}>
        <Image
          style={styles.headerButtonImage}
          source={require('../../../assets/icons/menu.png')}
        />
          <FontAwesomeIcon style={{color:'white', margin:FaIconsMargin}} size={ FaIconsSize } icon={ faBars } />
      </TouchableOpacity>
    );
    */
   const FaIconsSize = 30;
   const FaIconsMargin = 0;

    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={this.props.onPress}>
         
            <FontAwesomeIcon style={{color:'white', margin:FaIconsMargin}} size={ FaIconsSize } icon={ faBars } />
      </TouchableOpacity>
    );
  }
}

MenuImage.propTypes = {
  onPress: PropTypes.func
};
