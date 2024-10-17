import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.infoContainer}>
      <Image
        style={styles.infoImage}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.infoContent}>
        <Text>Họ và tên: Nguyễn Văn A</Text>
        <Text>MSSV: 22211109289</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  infoImage: {
    height: 50,
    width: 50,
  },
  infoContent: {},
});

export default Header;
