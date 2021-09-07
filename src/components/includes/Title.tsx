import {Text} from 'react-native';
import styled from 'styled-components';


const Title = styled(Text)`
    font-size: 26px;
    color: ${({theme}) => theme.colors.title}
`;

export default Title;
