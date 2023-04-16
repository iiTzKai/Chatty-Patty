import {Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

function ChatMenu({navigation}: any) {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const friends = firestore()
      .collection('Friends')
      .onSnapshot(querySnapshot => {
        const friends: any = [];

        if (querySnapshot) {
          querySnapshot.forEach(documentSnapshot => {
            friends.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.data()
            })
          })
        }

      })
    return () => friends();
  }, []);

  const handleLogout = () => {
    auth().signOut();
    navigation.pop();
  };
  console.log(friendList);

  return (
    <View>
      <Text onPress={handleLogout}>test</Text>
    </View>
  );
}

export default ChatMenu;
