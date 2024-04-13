import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Fikri Wado</Text>
      <Fixwad />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Fixwad = () => {
  return <Text>Fixwad</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://picsum.photos/100/100'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default SampleComponent;
