import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;

  @media screen {
    @media(max-width: 600px){
    display:flex;
    flex-direction: column;
    align-items: center;
  }
}
  
`;