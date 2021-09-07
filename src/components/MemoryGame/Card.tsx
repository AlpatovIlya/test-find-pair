import React, {FC} from 'react';
import {Image, TouchableOpacity, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {MemoryCardType} from '../../types';

type Props = {
    data: MemoryCardType,
    onPress?: () => void;
    wrapperStyle?: ViewStyle
}

type StyleProps = {
    active?: boolean

}

const Card: FC<Props & StyleProps> = ({data,
  onPress, active, wrapperStyle}) => {
  return (
    <Wrapper
      onPress={onPress}
      active={active}
      disabled={active}
      style={wrapperStyle}>
      <Img source={data.img} resizeMode={'contain'} active={active}/>
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)<StyleProps>`
    flex: 1;
    align-items: center;
    padding-vertical: 15px;
    background: ${({theme}) => theme.colors.sub}

`;
const Img = styled(Image)<StyleProps>`
    width: 40px;
    height: 40px;
    opacity: ${({active}) => active ? 1: 0};
    

`;

export default Card;
