import React, {FC} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import styled from 'styled-components';

type Props = {
    time: number;
    maxTime: number;
    wrapperStyle?: ViewStyle
}

const Timer: FC<Props> = ({time, maxTime, wrapperStyle}) => {
  return (
    <Wrapper style={wrapperStyle}>
      <TimeLine >
        <Line style={{
          width: `${time / maxTime * 100}%`,
        }}/>
      </TimeLine>
      <TimeText>{time}/{maxTime}</TimeText>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const TimeLine = styled(View)`
    background: ${({theme}) => theme.colors.white};
    flex: 1;
`;

const Line = styled(View)`
    padding: 20px 0;
    top: 0;
    left: 0;
    width: 40%;
    background: ${({theme}) => theme.colors.sub};
`;

const TimeText = styled(Text)`
    margin-left: 15px;
    font-size: 20px;
    font-weight: 600;
`;

export default Timer;
