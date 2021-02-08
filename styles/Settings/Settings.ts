import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
`;
export const Main = styled.main`
  padding: 20px !important;
  flex-grow: 1 !important;
  margin-top: 60px !important;
  @media (max-width: 992px) {
    padding: 15px !important;
  }
`;
