import styled from 'styled-components';
import config from 'app-config';
import Spacer from './Spacer';

const Header = styled(Spacer)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${config.theme.mainColor};
`;

export default Header;
