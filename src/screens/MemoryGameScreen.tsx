import {NavigationProp} from '@react-navigation/core';
import React, {FC, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {beeIcon,
  cowIcon,
  dogIcon,
  henIcon,
  koalaIcon,
  lionIcon,
  owlIcon,
  whaleIcon,
  catIcon,

  wizardIcon,
  warriorIcon,
  ninjaIcon,
  knightIcon,
  crystalIcon,
  witchIcon,
  hatIcon,
  tyrannosaurusIcon,
  diplodocusconIcon,
} from '../assets';
import {Card, Timer} from '../components/MemoryGame';
import {useTypedSelector} from '../hooks';
import {raitingActions} from '../redux/slices/ratingSlice';
import {MemoryCardType} from '../types';


type Props = {
  navigation: NavigationProp<any>;
}

// #region Cards
const cards: MemoryCardType[] = [
  {
    id: 1,
    img: beeIcon,
  },
  {
    id: 2,
    img: cowIcon,
  },
  {
    id: 3,
    img: dogIcon,
  },
  {
    id: 4,
    img: henIcon,
  },
  {
    id: 5,
    img: koalaIcon,
  },
  {
    id: 6,
    img: lionIcon,
  },
  {
    id: 7,
    img: owlIcon,
  },
  {
    id: 8,
    img: whaleIcon,
  },
  {
    id: 9,
    img: catIcon,
  },
  // -----
  {
    id: 10,
    img: wizardIcon,
  },
  {
    id: 11,
    img: warriorIcon,
  },
  {
    id: 12,
    img: ninjaIcon,
  },
  {
    id: 13,
    img: knightIcon,
  },
  {
    id: 14,
    img: crystalIcon,
  },
  {
    id: 15,
    img: witchIcon,
  },
  {
    id: 16,
    img: hatIcon,
  },
  {
    id: 17,
    img: tyrannosaurusIcon,
  },
  {
    id: 18,
    img: diplodocusconIcon,
  },
];
// #endregion


const currentCards: MemoryCardType[] = [...cards, ...cards];
let interval: NodeJS.Timer;
let dateTimeStart: Date;

const MemoryGameScreen: FC<Props> = ({navigation}) => {
  const {name} = useTypedSelector((state) => state.account);
  const dispatch = useDispatch();
  const [firstActiveItem, setFirstActiveItem] = useState<number | null>();
  const [secondActiveItem, setSecondActiveItem] = useState<number | null>();
  const [score, setScore] = useState(currentCards.length);
  const [timer, setTimer] = useState(5);
  const [memoryCards, setMemoryCards] = useState<number[]>([]);


  const handlePressCard = (index: number) => {
    if (firstActiveItem == null) {
      setFirstActiveItem(index);
      setTimer(5);
    } else if (secondActiveItem == null) setSecondActiveItem(index);
    else {
      setFirstActiveItem(index);
      setSecondActiveItem(null);
    }
  };

  const clearActiveCards = () => {
    setTimeout(() => {
      setFirstActiveItem(null);
      setSecondActiveItem(null);
    }, 1 * 500);
  };

  const handleCards = () => {
    if (firstActiveItem == null || secondActiveItem == null) return;

    const firstCard = currentCards[firstActiveItem];
    const secondCard = currentCards[secondActiveItem];

    if (firstCard.id === secondCard.id) {
      setMemoryCards((prev) => [...prev, firstActiveItem, secondActiveItem]);
      setFirstActiveItem(null);
      setSecondActiveItem(null);
    } else {
      setScore((prev)=> prev -1);
    }
    clearActiveCards();
  };
  const addToRaiting = () => {
    if (!name) return;
    dispatch(raitingActions.addRaiting({
      name,
      score,
      executionTime: +new Date - +dateTimeStart,
    }));
  };

  useEffect(() => {
    dateTimeStart = new Date;
  }, []);
  useEffect(() => {
    handleCards();
  }, [firstActiveItem, secondActiveItem]);

  useEffect(() => {
    clearInterval(interval);
    if (firstActiveItem != null && timer > 0) {
      interval = setInterval(() =>{
        if (timer <= 0) {
          clearInterval(interval);
          setFirstActiveItem(null);
          setSecondActiveItem(null);
        };
        setTimer((prev)=> prev -1);
      }, 1000);
    } else {
      setFirstActiveItem(null);
      setTimer(5);
    }
    return () => {
      clearInterval(interval);
    };
  }, [firstActiveItem, timer]);

  useEffect(() => {
    if (memoryCards.length === currentCards.length) {
      setFirstActiveItem(null);
      setSecondActiveItem(null);
      setMemoryCards([]);
      Alert.alert('Вы выйграли!');
      addToRaiting();
      navigation.goBack();
    }
  }, [memoryCards]);


  return (
    <Wrapper>
      <Timer time={timer} maxTime={5} wrapperStyle={{
        marginBottom: 50,
      }}/>
      <FlatList
        numColumns={6}
        columnWrapperStyle={{
        }}
        data={currentCards}
        renderItem={({item, index}) => {
          const isActive = index === firstActiveItem ||
            index=== secondActiveItem || memoryCards.includes(index);
          return <Card
            key={index}
            data={item}
            active={isActive}
            wrapperStyle={{
              margin: 2,
            }}
            onPress={() => handlePressCard(index)}/>;
        }
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background}
  padding-horizontal: ${({theme}) => theme.paddingHorizontal}px;
  padding-top: 10%;
`;

export default MemoryGameScreen;
