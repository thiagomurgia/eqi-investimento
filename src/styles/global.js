import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    font-family: 'Poppins', Arial, Helvetica, sans-serif;

    html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720){
      font-size: 87.5%;
    }
    @media (max-width: 380){
      font-size: 81%;
    }
  }

    button{
      cursor:pointer;
    }

    input{
      outline: none;
      border:solid 1px #333;
      height: 2.3rem;
    }


}

body{
      background-color:#efefef;
    }
`