import {Container, RadioBox} from './styles'
import { useButtonYi } from '../contexts/ButtonYi.Context'
import { FaCheck } from 'react-icons/fa'


export function ButtonYield(){

  const{typeYi, setTypeYi} = useButtonYi();


  return(
    <Container>

<div>
        <RadioBox
        style={{borderRadius:'4px 0 0 4px'}}
        onClick={() => {setTypeYi('bruto')}}
        isactive={typeYi === 'bruto'}
        > <FaCheck className='btn'
            onClick={() => {setTypeYi('bruto')}}
            isactive={typeYi === 'bruto'}
            style={{color:'#efefef'}}
          />
          Bruto
        </RadioBox>

        <RadioBox 
        style={{borderRadius:'0 4px 4px 0'}}
        onClick={() => {setTypeYi('liquido')}}
        isactive={typeYi === 'liquido'}
        > 
        <FaCheck className='btn'
            onClick={() => {setTypeYi('liquido')}}
            style={{color:'#efefef'}}
            isactive={typeYi === 'liquido'}
            />
          Líquido
        </RadioBox>
      </div>

    </Container>
    
  );
}