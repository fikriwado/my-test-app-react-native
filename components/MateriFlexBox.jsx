import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const MateriFlexBox = () => {
  return (
    <View>
      <View style={styles.parentBoxes}>
        <View style={[styles.box, styles.boxRed]} />
        <View style={[styles.box, styles.boxOrange]} />
        <View style={[styles.box, styles.boxTeal]} />
        <View style={[styles.box, styles.boxPurple]} />
      </View>
      <View style={styles.parentText}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={styles.parentSubs}>
        <Image
          source={{
            uri: 'https://yt3.googleusercontent.com/uQW_hteabQIY741jfqLjF7CPoEFeJiw7ou4Qb0ftJ1broXpHE07ahgf6SrFxqiE8UFBRHzq04w=s176-c-k-c0x00ffffff-no-rj',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.titleSubs}>Fikri Wado</Text>
          <Text>100K subscribers</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentBoxes: {
    flexDirection: 'row',
    backgroundColor: '#c8d6e5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  parentText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  parentSubs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    width: 50,
    height: 50,
  },
  boxRed: {
    backgroundColor: '#ee5253',
  },
  boxOrange: {
    backgroundColor: '#feca57',
  },
  boxTeal: {
    backgroundColor: '#1dd1a1',
  },
  boxPurple: {
    backgroundColor: '#5f27cd',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 14,
  },
  titleSubs: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
});

export default MateriFlexBox;
