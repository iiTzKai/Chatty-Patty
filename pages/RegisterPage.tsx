import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

function RegisterPage({navigation}: any) {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [confirmPasswd, setConfirmPasswd] = useState('');

  const handleRegister = () => {
    if (passwd !== confirmPasswd) {
      Alert.alert(
        "Password don't match",
        'Please type your password exacly like the last time',
      );
      setPasswd('');
      setConfirmPasswd('');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, passwd)
        .then(userCredential => {
          Alert.alert('account created ' + userCredential.user.email);
          setPasswd('');
          setConfirmPasswd('');
          setEmail('');
          navigation.pop()
        })
        .catch(error => {
          Alert.alert(error.code, error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      <StyledTextInput
        text="email"
        value={email}
        onChangeText={setEmail}
        autoCorrect="email"
      />
      <StyledTextInput
        text="Password"
        type="password"
        value={passwd}
        onChangeText={setPasswd}
        autoCorrect="password"
      />
      <StyledTextInput
        text="Confirm Password"
        type="password"
        value={confirmPasswd}
        onChangeText={setConfirmPasswd}
        autoCorrect="password"
      />
      <TouchableOpacity style={styles.btnRegister} onPress={handleRegister}>
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
    overflow: 'hidden',
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
