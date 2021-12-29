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
    border: 3px solid rgb(148, 81, 81);
    :hover {
      background-color: rgb(148, 81, 81) !important;
    }
  }
  .ghost {
    background-color: #70559B;
    color: #70559B;
    border: 3px solid #70559B;
    :hover {
      background-color: #70559B !important;
    }
  }
  .steel {
    background-color: #B7B9D0;
    color: #B7B9D0;
    border: 3px solid #B7B9D0;
    :hover {
      background-color: #B7B9D0 !important;
    }
  }
  .electric {
    background-color: #F9CF30;
    color: #F9CF30;
    border: 3px solid #F9CF30;
    :hover {
      background-color: #F9CF30 !important;
    }
  }
  .bug {
    background-color: #A7B723;
    color: #A7B723;
    border: 3px solid #A7B723;
    border: 3px solid #A7B723;
    :hover {
      background-color: #A7B723 !important;
    }
  }
  .poison {
    background-color: #e0a7f6;
    color: #e0a7f6;
    border: 3px solid #e0a7f6;
    :hover {
      background-color: #e0a7f6 !important;
    }
  }
  .normal {
    background-color: #AAA67F;
    color: #AAA67F;
    border: 3px solid #AAA67F;
    :hover {
      background-color: #AAA67F !important;
    }
  }
  .psychic {
    background-color: #FB5584;
    color: #FB5584;
    border: 3px solid #FB5584;
    :hover {
      background-color: #FB5584 !important;
    }
  }
  .fire {
    background-color: #F57D31;
    color: #F57D31;
    border: 3px solid #F57D31;
    :hover {
      background-color: #F57D31 !important;
      color: #F57D31;
    }
  }
  .grass {
    background-color:#74CB48;
    color: #74CB48;
    border: 3px solid #74CB48;
    :hover {
      background-color: #74CB48 !important;
    }
  }
  .water {
    background-color: #6493EB;
    color: #6493EB;
    border: 3px solid #6493EB;
    :hover {
      background-color: #6493EB !important;
    }
  }

  .ground {
    background-color: #B8860B;
    color: #B8860B;
    border: 3px solid #B8860B;
    :hover {
      background-color: #B8860B !important;
    }
  }
  .fairy {
    background-color: #EEDAE5;
    color: #EEDAE5;
    border: 3px solid #EEDAE5;
    :hover {
      background-color: #EEDAE5 !important;
    }
  }
  .fighting {
    background-color: #F5F5D6;
    color: #F5F5D6;
    border: 3px solid #F5F5D6;
    :hover {
      background-color: #F5F5D6 !important;
    }
  }
  .ice {
    background-color: #0ABAB5;
    color:#0ABAB5;
    border: 3px solid #0ABAB5;
    :hover {
      background-color: #0ABAB5 !important;
    }
  }
  .dragon {
    background-color: #003366;
    color:#003366;
    border: 3px solid #003366;
    :hover {
      background-color: #003366 !important;
    }
  }
`;
