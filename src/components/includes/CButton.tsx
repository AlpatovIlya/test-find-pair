import React, {FC} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styled from 'styled-components';

type Props = {
    title: string;
    onPress?: () => void;
    wrapperStyle?: ViewStyle,
    textStyle?: TextStyle,
}

type StyleProps = {
    disabled?: boolean
}

const CButton: FC<Props & StyleProps> = ({
  title, onPress, disabled, wrapperStyle, textStyle}) => {
  return (
    <Wrapper onPress={onPress} disabled={disabled} style={wrapperStyle}>
      <Title style={textStyle}>{title}</Title>
    </Wrapper>
  );
};


const Wrapper = styled(TouchableOpacity)<StyleProps>`
  padding: 25px 50px;
  background: ${({theme}) => theme.colors.main};
  borderRadius: 5px;
  opacity: ${({disabled}) => disabled ? '0.6': '1'};
`;
const Title = styled(Text)`
  color: ${({theme}) => theme.colors.white}
  text-transform: uppercase;
  font-weight: 600;
`;

export default CButton;
