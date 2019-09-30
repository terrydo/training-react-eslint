import config from 'app-config';
import styled from 'styled-components';

const FormHeader = styled.div`
  width: ${config.theme.formWidth};
  max-width: 80%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 30%;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export default FormHeader;
