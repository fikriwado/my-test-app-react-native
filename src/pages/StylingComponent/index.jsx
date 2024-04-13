import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {mackbook} from '../../assets';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          width: 204,
          padding: 12,
          backgroundColor: '#f2f2f2',
          borderRadius: 8,
          marginTop: 20,
          marginLeft: 20,
        }}>
        <Image
          source={mackbook}
          style={{width: 180, height: 110, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            color: '#000000',
            marginTop: 16,
          }}>
          New Mackbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '700',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: '#000000',
            marginTop: 12,
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            paddingVertical: 6,
            borderRadius: 25,
            backgroundColor: '#6fcf97',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#ffffff',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#10ac84',
    marginTop: 40,
    marginLeft: 20,
  },
});

export default StylingComponent;
