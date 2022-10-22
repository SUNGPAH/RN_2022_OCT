import {
  StyleSheet, 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    color: 'red',
    fontSize: 40,
    backgroundColor: 'rgba(255,200,100, 0.5)',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  },
  customView: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  customButton: {
    backgroundColor: '#7a5de8',
    padding: 16,
    borderRadius: 4,
  },
  textInButton: {
    color: 'white',
    fontWeight: "600",
  },
  input: {
    height: 60,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    width: '50%',
  },
  customImage: {
    width: 50, height: 50,
  },
  customImageDetail: {
    width:'100%',
    height:200,
  },
  view1: {
    backgroundColor:'#442dc9',
    padding:20,
  }, 
  view2: {

  }
});

export default styles
