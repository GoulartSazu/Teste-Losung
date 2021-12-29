import styled from 'styled-components';

export const Char = styled.div`
  width: 23%;
  @media screen and (max-width: 1000px) {
    width: 32%;
    }

  .card {
    background-color: white;
    border-radius: 20px;
    position: relative;
    transition: all 0.5s;
    @media screen and (max-width: 1000px) {
      border-radius: 15px;
    }
  }
  span {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    border: 0px;
    background-color: transparent;
    @media screen and (max-width: 800px) {
      font-size: 15px;
      top: 5px;
      right: 5px;
    }
  }
  img {
    display: block;
    width: 62%;
    margin: 45px auto 20px;
    transition: all .3s;
    height: 240px;
    @media screen and (max-width: 1000px) {
      margin: 25px auto 5px; 
      height: 90px;
    }
    
  }
  h2 {
    transition: all .3s;
    width: 100.2%;
    text-align: center;
    font-size: 30px;
    margin-bottom: -0.5px;
    padding: 20px 0;
    color: white;
    border: 3px solid transparent;
    text-transform: capitalize;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    @media screen and (max-width: 1000px) {
      font-size: 14px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      width: 101.5%;
      margin-left: -1px;
      padding: 10px 0;
    }
  }
  a {
    text-decoration: none;
  }
  .card:hover {
      box-shadow: 5px 5px 10px rgb(0,0,0,0.25);
      img {
        width: 70%;
        filter: brightness(130%);
      }
      span {
        color: white;
      }
    }
`;
export const Procurar = styled.div`
  padding: 40px 0;
  @media screen and (max-width: 800px) {
    padding: 0;
  }

  input,button {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid #E0E0E0;
    padding: 15px 0px;
    color: #666666;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    background: linear-gradient(to right, #212121 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease;
    @media screen and (max-width: 800px) {
      font-size: 20px;
      padding: 5px 0px;
    }
    ::placeholder {
      color: #666666;
      font-size: 30px;
      font-weight: 400;
      margin-left: 10px;
      transition: all 2s;
      text-align: center;
      @media screen and (max-width: 800px) {
        font-size: 20px;
      }
    }

    h5 {
      color: #666666;
      font-size: 30px;
      font-weight: 400;
      margin-left: 10px;
      transition: all 2s;
    }
    svg {
      font-size: 30px;
      margin-right: 10px;
      color: #666666;
      transition: all 2s;
    }
  }

  button {
    cursor: pointer;
    width: 40%;
    :hover {
      background-position: left bottom;
      color: white;
      ::placeholder {
        color: white;
      }
      h5, svg {
        color: white;
      }
    }
    
  }
  input {
    :focus {
      background-position: left bottom;
      color: white;
      ::placeholder {
        color: white;
      }
      h5, svg {
        color: white;
      }
    }
  }
  form {
    div {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 800px) {
        margin: 20px 0;
      }
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;
  @media screen and (max-width: 1000px) {
    row-gap: 10px;
  }
`;
