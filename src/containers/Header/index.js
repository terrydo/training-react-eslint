import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Spacer from 'components/Header/Spacer';
import FormHeader from 'components/Header/FormHeader';
import FormHeaderTab from 'components/Header/FormHeaderTab';

const HeaderGroup = styled.div`
  position: relative;
`;

export default function HeaderComponent() {
  return (
    <HeaderGroup>
      <Header as="header" />
      <Spacer />
      <FormHeader>
        <FormHeaderTab>QUESTIONS</FormHeaderTab>
      </FormHeader>
    </HeaderGroup>
  );
}
