import React from 'react';
import { Helmet } from 'react-helmet';
import { Main, Root } from '../../styles/Settings/Settings';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Settings() {
  return (
    <Root>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <Sidebar title="Configurações"></Sidebar>
      <Main>Configurações</Main>
    </Root>
  );
}
