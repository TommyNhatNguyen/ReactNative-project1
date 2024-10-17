import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ScoreItem = ({
  item,
  handleUpdateTotalScore,
  handleAddScore,
  handleDeleteScore,
}: {
  item: any;
  handleUpdateTotalScore: (selectedId: any, inputScore: number) => void;
  handleAddScore: (selectedId: any) => void;
  handleDeleteScore: (selectedId: any) => void;
}) => {
  const _onUpdate = (selectedId: any, inputScore: number) => {
    handleUpdateTotalScore(selectedId, inputScore);
  };
  const _onAdd = (selectedId: any) => {
    handleAddScore(selectedId);
  };
  const _onDelete = (selectedId: any) => {
    handleDeleteScore(selectedId);
  };
  return (
    <View style={styles.renderItem}>
      <Text>
        <Text>{item.title}</Text>
        <Text>{item.value}</Text>
      </Text>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          onPress={() => _onUpdate(item.id, item.value)}
          style={[styles.btn, styles.bgGreen]}>
          <Text style={{textAlign: 'center', color: 'white'}}>Xem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _onAdd(item.id)}
          style={[styles.btn, styles.bgBlue]}>
          <Text style={{textAlign: 'center', color: 'white'}}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _onDelete(item.id)}
          style={[styles.btn, styles.bgRed]}>
          <Text style={{textAlign: 'center', color: 'white'}}>Xoá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 100000,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bgGreen: {
    backgroundColor: 'green',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgBlue: {
    backgroundColor: 'blue',
  },
});

export default ScoreItem;
