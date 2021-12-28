import styled from 'styled-components';

export const Pokedex = styled.header`
  padding: 40px 0;
  section, div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #212121;
    font-size: 84px;
    margin-left: 40px;
    @media screen and (max-width: 800px) {
      font-size: 30px;
      margin-left: 5px;
    }
  }
  img {
    width: 90px;
    @media screen and (max-width: 800px) {
      width: 60px;
    }
    
  }
  span {
    color: #212121;
    font-size: 40px;
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  svg {
    font-size: 75px;
    color: #212121;
    @media screen and (max-width: 800px) {
      font-size: 45px;
    }
  }
`;
