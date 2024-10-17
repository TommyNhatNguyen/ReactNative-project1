import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputComponent = ({
  totalScore,
  handleScoreInput,
  score,
}: {
  totalScore: number;
  handleScoreInput: (score: number) => void;
  score: any;
}) => {
  const _onChange = (inputScore: any) => {
    handleScoreInput(inputScore);
  };
  return (
    <View style={styles.totalContainer}>
      <TextInput
        onChangeText={_onChange}
        style={styles.totalInput}
        placeholder="Nhập điểm..."
        keyboardType="numeric"
        inputMode="numeric"
        value={score}
      />
      <Text style={styles.totalTextMain} adjustsFontSizeToFit={true}>
        Total: {totalScore || 0}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 16,
  },
  totalInput: {
    padding: 4,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 4,
    minWidth: '40%',
  },
  totalTextMain: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default InputComponent;
