import {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

function StyledTextInput({type, text, onChangeText, value, autoCorrect}: any) {
    
  const [passwdState, setPasswdState] = useState(false);

  useEffect(() => {
    if (type === 'password') {
      setPasswdState(true);
    } else {
      setPasswdState(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <TextInput
        style={styles.userInput}
        placeholder={text}
        secureTextEntry={passwdState}
        onChangeText={onChangeText}
        value={value}
        autoComplete={autoCorrect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    position: 'relative',
    marginBottom: 10,
    overflow: 'hidden'
  },
  textStyle: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 15,
  },

  userInput: {
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
  },
});

export default StyledTextInput;
