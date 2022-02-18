import { Content } from '../Content';
import { Title } from '../Title'

import {Container} from './styles';

import ButtonProviderIndexing from '../contexts/ButtonIn.Context';
import ButtonProviderYield from '../contexts/ButtonYi.Context';

export function Main(){
  return(
    <>
      <ButtonProviderIndexing>
      <ButtonProviderYield>
        <Container>
          <Title />
          <Content />
        </Container>
      </ButtonProviderYield>
      </ButtonProviderIndexing>
    </>
  );
}