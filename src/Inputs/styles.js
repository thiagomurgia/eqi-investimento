import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
    @media(max-width: 600px){
    display:flex;
    flex-direction: column;
    width: 75%;
  }
`;

export const Simulator = styled.div`
  height: 2rem;
  font-weight: 600;
`;

export const Title = styled.div`
  display: flex;
  font-size: .75rem;
  justify-content: space-between;
  margin-bottom: 1.1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 0 2rem;
  input{
    max-width: 80%;
    background-color: #efefef;
    border:none;
    
    border-bottom: 2px solid #cacaca;
  }
  &:last-child{
    width: 50%;
  }
    @media(max-width: 600px){
    display:flex;
    flex-direction: column;
    width: 100%;
    margin:0;
  }
`;

export const WrapperResult = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2.5rem;

`;

export const Card = styled.article`
  display:flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 4px;
  box-shadow: 1px 2px 5px 1px #cacaca;
  border-radius: 0.25rem;
  h6{
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: .8rem;
    text-align: center;
  }
  p{
    margin-top: .5rem;
  }
`;

export const ErrComponent = styled.div`
    margin-top: .25rem;
    height: 1.5rem;
`;

export const ButtonsSend = styled.button`
  background-color: ${props => props.validate === 'true' ? '#ed8e53' : 'transparent'};
  border:none;
  border: solid 1px ${props => props.validate === 'true' ? '#ed8e53' : '#333'};
  max-width: 92%;
  height: 2.5rem;
  border-radius: .25rem;

`;