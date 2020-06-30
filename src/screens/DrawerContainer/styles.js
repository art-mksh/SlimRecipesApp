import { StyleSheet } from 'react-native';
import { Main } from '../../AppStyles';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  },
  headerBar: Main.headerBar

});

export default styles;
