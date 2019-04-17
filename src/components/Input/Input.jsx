import styled from 'styled-components'
import { colors } from '../../styles/globalStyles'

const Input = styled.input`
  height: 46px;
  min-width: 300px;
  font-size: 16px;
  border 1px solid ${colors.spray};
  padding: 13px 15px;
  &:focus {
    border-size: 2px;
  }
`;

export default Input;