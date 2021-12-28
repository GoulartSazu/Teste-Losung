import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    width: 96.5%;
    max-width: 1200px;
    margin: 0px auto;
    @media screen and (min-width: 1599px) {
      max-width: 1600px;
    }      
    @media screen and (max-width: 700px) {
      overflow-x: hidden !important;
      width: 95%;
    }
  }

  body {
    background: #E5E5E5;
    margin: 40px;
    border-radius: 30px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    padding-bottom: 40px;
    @media screen and (max-width: 800px) {
      margin: 10px;
    }
  }
  html {
    background-color: white;
  }
  .rock {
    background-color: rgb(148, 81, 81);
    color: rgb(148, 81, 81);
  }
  .ghost {
    background-color: #70559B;
    color: #70559B;
  }
  .steel {
    background-color: #B7B9D0;
    color: #B7B9D0;
  }
  .electric {
    background-color: #F9CF30;
    color: #F9CF30;
  }
  .bug {
    background-color: #A7B723;
    color: #A7B723;
  }
  .poison {
    background-color: #e0a7f6;
    color: #e0a7f6;
  }
  .normal {
    background-color: #AAA67F;
    color: #AAA67F;
  }
  .psychic {
    background-color: #FB5584;
    color: #FB5584;
  }
  .fire {
    background-color: #F57D31;
    color: #F57D31;
  }
  .grass {
    background-color:#74CB48;
    color: #74CB48;
    stroke: #74CB48 !important;
  }
  .water {
    background-color: #6493EB;
    color: #6493EB;
  }

`;
