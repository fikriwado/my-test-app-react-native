import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {cart} from '../assets';

const PositionComponent = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <View style={styles.badge}>
          <Text style={styles.textBadge}>10</Text>
        </View>
      </View>
      <Text style={styles.textCart}>Keranjang belanja anda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    width: 93,
    height: 93,
    borderWidth: 1,
    borderRadius: 93 / 2,
    borderColor: '#4398D1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  textCart: {
    fontSize: 12,
    color: '#777',
    marginTop: 8,
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 24,
    height: 24,
    padding: 4,
    borderRadius: 24 / 2,
    backgroundColor: '#6fcf97',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBadge: {
    fontSize: 12,
    color: '#fff',
  },
});

export default PositionComponent;
