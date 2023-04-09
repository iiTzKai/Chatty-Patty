import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import StyledTextInput from '../components/StyledTextInput';

function RegisterPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      <StyledTextInput text="Email" />
      <StyledTextInput text="Password" type="password" />
      <StyledTextInput text="Confirm Password" type="password" />
      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.txtRegister}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRegister: {
    backgroundColor: '#0066CC',
    width: '30%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 20,
  },
  txtRegister: {
    color: 'white',
    fontWeight: '600',
  },
  logo: {
    width: '80%',
    height: 220,
    resizeMode: 'contain',
  },
});

export default RegisterPage;
