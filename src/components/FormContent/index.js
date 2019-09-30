import styled from 'styled-components';
import config from 'app-config';

const StyledFormContent = styled.main`
  max-width: ${config.theme.formWidth};
  border: 1px solid #ccc;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
  margin: auto;
`;

export default StyledFormContent;
