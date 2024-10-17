/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import FlatListComponent from './components/FlatListComponent';
import ScoreItem from './components/ScoreItem';
type ItemData = {
  id: string;
  title: string;
  value: number;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbe123a-c1b1-46c2-aed5-3ad53a124bb28ba',
    title: 'Toán: ',
    value: 10,
  },
  {
    id: '3ac68afc-c605-48d3-a4f81-fbd91aa97f12463asdf',
    title: 'Văn ',
    value: 10,
  },
  {
    id: '58694a0f-3da1-471f-bd12396-141245571e29d721234',
    title: 'Sử ',
    value: 10,
  },
  {
    id: '58694a0f-3da1-471241f-bd96-145571e29d721123234',
    title: 'Anh Văn ',
    value: 10,
  },
  {
    id: '58694a0f-3da1-412471f-bd96-145571e29d752123',
    title: 'Địa lý ',
    value: 10,
  },
  {
    id: '58694a0124f-3da1-471f-bd96-145571e29d721212312334',
    title: 'Hoá học ',
    value: 10,
  },
  {
    id: '58694a0124f-3da1-471f-bd96-145571e29d721123234',
    title: 'Vật lý ',
    value: 10,
  },
];

const App = () => {
  const [data, setData] = useState(DATA);
  const [score, setScore] = useState(0);
  const [currentSelectedId, setCurrentSelectedId] = useState('');
  const totalScore = data
    .map(item => item.value)
    .reduce((prev, val) => {
      let result = prev + val;
      return result;
    });
  const handleScoreInput = (inputScore: number) => {
    let numScore = Number(inputScore);
    if (numScore > 10 || numScore < 0) {
      Alert.alert('Invalid score, try from: 0 - 10', 'Invalid Input', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Try again',
          onPress: () => {
            setScore(0);
          },
        },
      ]);
    } else {
      setScore(numScore);
    }
  };
  const handleUpdateTotalScore = (selectedId: any) => {
    setCurrentSelectedId(selectedId);
    setData(prev => {
      return prev.map(item => {
        if (item.id === selectedId) {
          item.value += score;
        }
        return item;
      });
    });
  };
  const handleAddScore = (selectedId: any) => {
    setCurrentSelectedId(selectedId);
    let newItem: ItemData = {
      id: Math.random().toString(),
      title: 'Default',
      value: 10,
    };
    let selectedIndex = data.map(item => item.id).indexOf(selectedId);
    setData(prev => {
      return [
        ...prev.slice(0, selectedIndex + 1),
        newItem,
        ...prev.slice(selectedIndex + 1),
      ];
    });
  };
  const handleDeleteScore = (selectedId: any) => {
    setCurrentSelectedId(selectedId);
    setData(prev => {
      return prev.filter(item => item.id !== selectedId);
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <InputComponent
          totalScore={totalScore}
          handleScoreInput={handleScoreInput}
          score={score}
        />
        <FlatListComponent
          data={data}
          currentSelectedId={currentSelectedId}
          renderItemComponent={({item}) => {
            return (
              <ScoreItem
                item={item}
                handleUpdateTotalScore={handleUpdateTotalScore}
                handleAddScore={handleAddScore}
                handleDeleteScore={handleDeleteScore}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  infoImage: {
    height: 50,
    width: 50,
  },
  infoContent: {},
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
  scrollView: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'blue',
    maxHeight: 500,
  },
});
