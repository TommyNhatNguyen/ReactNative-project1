import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

const FlatListComponent = ({
  data,
  renderItemComponent,
  currentSelectedId,
}: {
  data: any;
  renderItemComponent: ListRenderItem<any>;
  currentSelectedId: any;
}) => {
  return (
    <View style={styles.scrollView}>
      <FlatList
        data={data}
        renderItem={renderItemComponent}
        keyExtractor={item => item.id}
        extraData={currentSelectedId}
        style={{paddingVertical: 16, paddingHorizontal: 16}}
        contentContainerStyle={{
          gap: 16,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'blue',
    maxHeight: 500,
  },
});
export default FlatListComponent;
