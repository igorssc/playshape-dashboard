import styled from 'styled-components';

export const BoxStyled = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #dfe0eb;
  margin: 5px;
  flex: 1 1 0px;
  .title-main-data {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
  }
  .value-main-data {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    white-space: nowrap;
  }
  .titleLineChart {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }
  @media (max-width: 992px) {
    .title-main-data {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
    }
    .value-main-data {
      font-size: 1.6rem;
      font-weight: 600;
      text-align: center;
      margin: 0;
    }
  }
`;
