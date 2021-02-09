import Sidebar from '../components/Sidebar/Sidebar';
import { Main, Root } from '../../styles/Home/Home';
import React from 'react';
import { Helmet } from 'react-helmet';
import Box from '../components/Box/Box';
import MainData from '../components/MainData/MainData';
import LineChart from '../components/Charts/Home/Line';
export default function Home() {
  return (
    <Root>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Sidebar title={'Início'}></Sidebar>
      <Main>
        <MainData>
          <Box>
            <h1 className="title-main-data">Usuários</h1>
            <p className="value-main-data">2.600</p>
          </Box>
          <Box>
            <h1 className="title-main-data">Usuários Online</h1>
            <p className="value-main-data">113</p>
          </Box>
          <Box>
            <h1 className="title-main-data">Lojas</h1>
            <p className="value-main-data">987</p>
          </Box>
          <Box>
            <h1 className="title-main-data">Vendas Hoje</h1>
            <p className="value-main-data">R$ 600,00</p>
          </Box>
        </MainData>
        <MainData>
          <Box>
            <h1 className="titleLineChart">Total de Usuários</h1>
            <LineChart />
          </Box>
        </MainData>
      </Main>
    </Root>
  );
}
