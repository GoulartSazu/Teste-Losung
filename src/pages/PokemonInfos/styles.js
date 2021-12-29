import styled from 'styled-components';

export const fire = {
  color: "#F57D31",
};
export const bug = {
  color: "#A7B723",
};
export const eletric = {
  color: "#F9CF30",
};
export const ghost = {
  color: "#70559B",
};
export const normal = {
  color: "#AAA67F",
};
export const psychic = {
  color: "#FB5584",
};
export const steel = {
  color: "#B7B9D0",
};


export const NameMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 40px;
  h1,svg,span {
    color: white;
  }
  svg {
    font-size: 80px;
    @media screen and (max-width: 800px) {
      font-size: 40px;
    }
  }
  h1 {
    font-size: 84px;
    text-transform: capitalize;
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  span {
    color: white;
    font-size: 40px;
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
`;

export const SlidePokemon = styled.div`
  position: relative;
  z-index: 999;
  border: 0px;
  :hover {
    background-color: transparent;
  }
 .bigPokeball {
    position: absolute;
    opacity: 0.03;
    top: -150px;
    right: 440px;
    width: 600px;
  }
  .picPokemon {
    display: block;
    padding: 60px 0 40px;
    margin: auto;
    width: 100%;
    max-width: 600px;
    max-height: 700px;
    position: relative;
    @media screen and (max-width: 800px) {
      width: 66%;
      padding: 0;
      margin-top: -50px;
      margin: auto;
    }
  }
  .slick-prev:before, .slick-next:before {
    color: white;
    font-size: 130px;
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  .slick-next {
    right: 460px;
    @media screen and (max-width: 800px) {
      right: 25px;
    }
  }
  .slick-prev {
    left: 340px;
    z-index: 999;
     @media screen and (max-width: 800px) {
      left: 25px;
    }
  }
  ::before {
      content: '';
      background-color: white;
      width: 98.36%;
      height: 200px;
      position: absolute;
      bottom: 0px;
      z-index: 0;
      right: 20px;
      left: 20px;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      @media screen and (max-width: 800px) {
        width: 89%;
        bottom: -150px;
        height: 72px;
        top: 77%;
     }
    }

`;

export const About = styled.div`
    background-color: white;
    margin: 20px;
    margin-bottom: 0;
    padding-top: 200px;
    position: relative;
    z-index: 0;
    margin-top: -150px;
  h3 {
    color: white;
    margin: auto;
    max-width: 250px;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
    font-size: 40px;
    text-transform: capitalize;

    @media screen and (max-width: 800px) {
    padding: 10px;
    text-align: center;
    font-size: 20px;
    }
  }
  h2 {
    text-align: center;
    font-size: 50px;
    margin-top: 40px;
    background-color: transparent;
    border: 0px;
    :hover {
      background-color: transparent !important;
    }
    @media screen and (max-width: 800px) {
    font-size: 30px;
    }
  }

  .infos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 150px 0;
    color: #212121;
    @media screen and (max-width: 800px) {
      margin: 50px 0px;
    }
    svg {
      color: #212121;
      font-size: 40px;
      margin-right: 20px;
      @media screen and (max-width: 800px) {
        font-size: 14px;
        margin-right: 5px;
      }
    }
  }
  .height, .weight, .moves {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .weight,.height {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    ::after {
      content: '';
      background-color: #E0E0E0;
      width: 3px;
      height: 200px;
      position: absolute;
      right: 0px;
      border-radius: 10px;
      @media screen and (max-width: 800px) {
        height: 120px;
      }
    }
    
    div {
      display: flex;
      align-items: center;
    }
    p {
      font-size: 40px;
      color: #212121;
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
    span {
      font-size: 30px;
      margin-top: 20px;
      color: #666666;
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
  }
  .moves {
    flex-direction: column;
    margin-top: -39px;
    @media screen and (max-width: 800px) {
      margin-top: 0px;
      height: 100px;
    }
    p {
      font-size: 40px;
      text-align: center;
      color: #212121;
      line-height: 40px;
      text-transform: capitalize;

      @media screen and (max-width: 800px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    span {
      font-size: 30px;
      margin-top: 20px;
      color: #666666;
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
  }
  .description {
    font-size: 40px;
    padding: 40px;

    @media screen and (max-width: 800px) {
      font-size: 17px;
      padding: 10px;
      line-height: 25px;
    }
  }  
`;

export const Stats = styled.div`
  background-color: white;
  margin: 0px 20px;
  margin-bottom: 0;
  padding-top: 80px;
  padding-bottom: 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media screen and (max-width: 800px) {
    padding-top: 30px;
  }

  h2 {
    text-align: center;
    background-color: transparent;
    font-size: 50px;
    border: 0px;
    :hover {
      background-color: transparent !important;
    }
    @media screen and (max-width: 800px) {
    font-size: 30px;
    }
  }
  section {
    display: flex;
    width: 100%;
  }
  ul {
    list-style: none;
    margin-top: 100px;
    width: 10%;
     @media screen and (max-width: 800px) {
        width: 15%;
        margin-top: 40px;
      }
   
    li {
      margin-bottom: 40px;
      font-size: 40px;
      font-weight: bold;
      background-color: transparent;
      text-align: center;
      border: 0px;
      :hover {
        background-color: transparent !important;
      }
      @media screen and (max-width: 800px) {
        font-size: 14px;
        margin-bottom: 20px;
        margin-left: 10px;
      }
    }
  }
  .progress {
    width: 80%;
    @media screen and (max-width: 800px) {
      width: 66%;
    }
  }
  .powers {
    position: relative;
    ::after {
      content: '';
      background-color: #E0E0E0;
      width: 3px;
      height: 100%;
      position: absolute;
      top: -20px;
      right: 0px;
      border-radius: 20px;
      @media screen and (max-width: 800px) {
        right: -8px;
         width: 2px;
         top: -10px;
      }
    }
  }

`;


