import { StyleSheet } from 'react-native';
import { Main } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2cd18a'
  },
  photo: {
    width: 150,
    height: 150
  },
  headerBar: Main.headerBar
});

export default styles;
