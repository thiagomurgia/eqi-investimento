import {Container, RadioBox} from './styles'
import { useButtonIn } from '../contexts/ButtonIn.Context';

import { FaCheck } from 'react-icons/fa'


export function ButtonIndexing(props){

  const{typeIn, setTypeIn} = useButtonIn();



  return(
    <Container>

<div>
        <RadioBox
        style={{borderRadius:'4px 0 0 4px'}}
        onClick={() => {setTypeIn('pre')}}
        isactive={typeIn === 'pre'}
        yieldType={typeIn}
        > <FaCheck className='btn'
            onClick={() => {setTypeIn('pre')}}
            isactive={typeIn === 'pre'}
            style={{color:'#efefef'}}
          />
          PRÉ
        </RadioBox>


        <RadioBox 
        onClick={() => {setTypeIn('pos')}}
        isactive={typeIn === 'pos'}
        > <FaCheck className='btn'
            onClick={() => {setTypeIn('pre')}}
            style={{color:'#efefef'}}
            isactive={typeIn === 'pos'}
          />
          POS
        </RadioBox>

        <RadioBox 
        style={{borderRadius:'0 4px 4px 0'}}
        onClick={() => {setTypeIn('fixed')}}
        isactive={typeIn === 'fixed'}
        > 
        <FaCheck className='btn'
            onClick={() => {setTypeIn('pre')}}
            style={{color:'#efefef'}}
            isactive={typeIn === 'fixed'}
            />
          FIXADO
        </RadioBox>
      </div>

    </Container>
    
  );
}