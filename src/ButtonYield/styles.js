import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;


  div{
    display:flex;
    align-items: center;
    width: 100%;
    border-radius: 4px 0 0 4px;
    &:last-child{
      border-radius: 0 4px 4px 0;
  }
}
`;

export const RadioBox = styled.button`
  border:none;
     border:solid 1px #333;
     flex:1;
     font-size: 0.8rem;
     padding:0.7rem 0;
     margin-bottom: 3rem;
     box-sizing: border-box;
     background: ${props => props.isactive ? "#ed8e53" : "none"};
     &:first-child{
       border-radius: 0.25rem 0 0 0.25rem;
}
`;