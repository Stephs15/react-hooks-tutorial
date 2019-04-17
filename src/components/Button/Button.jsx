import styled from 'styled-components'
import { colors } from '../../styles/globalStyles'

const Button = styled.button`
  box-sizing: border-box;
  height: 36px;
  padding: 5px 10px;
  font-size: 16px;
  min-width: 50px;
  border: 1px solid ${colors.spray};
  background-color: ${colors.woodsmoke}
  color: white;
  margin: 0 5px;
  cursor: pointer;
`;

export default Button;