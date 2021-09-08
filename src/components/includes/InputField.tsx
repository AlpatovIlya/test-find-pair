import React, {FC} from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import styled from 'styled-components';

type Props = {
    value?: string;
    onChangeText?: (value: string) => void;
    wrapperStyle?: ViewStyle;
    placeholder?: string;
}

const InputField: FC<Props> = ({value,
  onChangeText,
  wrapperStyle,
  placeholder}) => {
  return (
    <Wrapper style={wrapperStyle}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}/>
    </Wrapper>
  );
};

const Wrapper = styled(View)``;
const Input = styled(TextInput)`
    background: ${({theme}) => theme.colors.white};
    padding: 15px 10px;
    border-radius: 5px;
    font-size: 16px;
`;

export default InputField;
