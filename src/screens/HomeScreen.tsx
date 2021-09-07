import {NavigationProp} from '@react-navigation/core';
import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {CButton, InputField, Title} from '../components/includes';
import config from '../constants';
import {useTypedSelector} from '../hooks';
import {accountActions} from '../redux/slices/accountSlice';

type Props = {
  navigation: NavigationProp<any>;
}

const {screenNames} = config;

const HomeScreen: FC<Props> = ({navigation}) => {
  const accountState = useTypedSelector((state) => state.account);
  const dispatch = useDispatch();
  const [name, setName] = useState(accountState.name || '');

  const handleSubmit = () => {
    if (!name.trim()) {
      setName('');
      return;
    }
    dispatch(accountActions.setName(name));

    navigation.navigate(screenNames.MEORYGAME);
  };
  return (
    <Wrapper>
      <Title style={{
        textAlign: 'center',
        marginBottom: 40,
      }}>Главная</Title>
      <InputField value={name} onChangeText={setName}
        placeholder={'Ваше имя'}
        wrapperStyle={{
          marginBottom: 20,
        }}
      />
      <CButton
        disabled={!name}
        title='Начать игру'
        wrapperStyle={{alignSelf: 'center'}}
        onPress={handleSubmit}/>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  flex: 1;
  padding-top: 30%;
  background: ${({theme}) => theme.colors.background};
  padding-horizontal: ${({theme}) => theme.paddingHorizontal}px;

`;


export default HomeScreen;
