import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components';
import {Title} from '../components/includes';
import {useTypedSelector} from '../hooks';

const RatingScreen = () => {
  const {raiting} = useTypedSelector((state)=> state.raiting);
  console.log(raiting);
  return (
    <Wrapper>
      <Title style={{
        textAlign: 'center',
        marginBottom: 20,
      }}>Рейтинг</Title>
      <Table>
        <TableHeader>
          <TableColumn>Имя</TableColumn>
          <TableColumn>Очки</TableColumn>
          <TableColumn>Время</TableColumn>
        </TableHeader>
      </Table>
      <FlatList
        data={[...raiting].sort((a, b) => a.score < b.score)}
        renderItem={({item, index}) =>
          <TableBody key={index}>
            <TableRow>{item.name}</TableRow>
            <TableRow>{item.score}</TableRow>
            <TableRow>{(item.executionTime / 1000).toFixed(2)}</TableRow>

          </TableBody>}
      />
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  padding-top: 10%;
`;

const Table = styled(View)`
  width: 100%;
`;
const TableHeader = styled(View)`
  flex-direction: row;
  width: 100%;
`;
const TableColumn = styled(Text)`
  flex: 1 0 33%;
  background: ${({theme}) => theme.colors.sub};
  padding: 15px 5px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 600;
  border-color: ${({theme}) => theme.colors.main};
  border-width: 1px;
`;

const TableBody = styled(View)`
  flex-direction: row;
`;
const TableRow = styled(Text)`
  flex: 1 0 33%;
  text-align: center;
  padding: 10px 5px;
  border-color: ${({theme}) => theme.colors.main};
  border-width: 1px;

`;


export default RatingScreen;
