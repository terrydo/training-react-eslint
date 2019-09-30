import styled from 'styled-components';
import config from 'app-config';

const FormHeaderTab = styled.div`
  height: 100%;
  display:flex;
  align-items: center;
  font-weight: 700;
  padding: 0 15px;
  color: ${config.theme.mainColor};
  border-radius: 2px;
  border-bottom: 2px solid ${config.theme.mainColor};
`;

export default FormHeaderTab;
