import axios from 'axios';
import { MdInfoOutline } from 'react-icons/md'
import { ButtonYield } from '../ButtonYield';
import {ButtonIndexing} from '../ButtonIndexing';
import { Labels } from '../Labels';
import { Wrapper, Container, ErrComponent, ButtonsSend, Title, Simulator, Card, WrapperResult } from './styles';
import { useEffect, useState } from 'react';
import { validateInput } from '../rules';



import { useButtonIn } from '../contexts/ButtonIn.Context'
import { useButtonYi } from '../contexts/ButtonYi.Context'

import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

export function Inputs(props){

  const[aport, setAport] = useState('')
  const[monthAport, setMonthAport] = useState('')
  const[deadline, setDeadline] = useState('')
  const[rentability, setRentability] = useState('')

  const[inputErr, setInputErr] = useState(false)

  const[result, setResult] = useState(false)
  const[filtered, setFiltered] = useState({})


  const {typeIn, setTypeIn} = useButtonIn('')
  const {typeYi, setTypeYi} = useButtonYi('')

 

  function clearInputs (){
    setAport('')
    setMonthAport('')
    setDeadline('')
    setRentability('')
  }
  
  const[cdiIpca, setCdiIpca] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/indicadores')
    .then(({data}) =>{
      
      setCdiIpca(data)
    })
    //eslint-disable-next-line react-hooks/exaustive-deps
  },[])
  

  const[simulate, setSimulate] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/simulacoes')
    .then(({data}) =>{

      setSimulate(data)
    })
    //eslint-disable-next-line react-hooks/exaustive-deps
  },[typeIn, typeYi])


  function callObject(){
    if(validateInput.test(monthAport)){
      setInputErr(false)
      setResult(true)
      setFiltered(simulate.filter(item =>
        item.tipoIndexacao == typeIn && item.tipoRendimento == typeYi ))
    }else{
      setInputErr(true)
      }
  }

  return(
    <>
    
    <Wrapper>
      <Container>
      <Simulator>Simulador</Simulator>
        <Title>
          <div>Rendimento</div>

          <div>
            <Tooltip
              title="<strong>Rendimento bruto nominal:</strong><small>informa quanto um investimento rendeu, mas sem descontar os impostos e a inflação;</small>
              <strong>Rendimento líquido nominal: </strong><small>obtém-se após descontar o rendimento bruto nominal os impostos que precisam ser pagos;</small>
              <strong>Rendimento líquido real:</strong> <small>é o valor que de fato ficará com você.</small>"           
            >
              <MdInfoOutline style={{fontSize:"1rem"}} />
            </Tooltip>
          </div>

        </Title>
        <ButtonYield
          yieldType={console.log()}
        />
        <Labels title='Aporte inicial' />
        <input
          placeholder='R$'
          type='number'
          value={aport}
          onChange={(e)=> setAport(e.target.value)}
        />   
        <ErrComponent/>

      <Labels title='Prazo(em meses)' />
        <input
          type='number'
          value={deadline}
          onChange={(e)=> setDeadline(e.target.value)}
        />
        <ErrComponent/>
       
        

      <Labels title='IPCA(ao ano)' />
        {cdiIpca.filter(indicator => indicator.nome ==='ipca').map(item =>
          <input
          disabled
            style={{cursor: 'not-allowed', opacity: 0.9}}
            value={`${item.valor} %`}
          />
        )}

        <ErrComponent/>

        <ButtonsSend
        onClick={clearInputs}
        >
          Limpar campos
        </ButtonsSend>
      </Container>

      <Container>
      <Simulator />
      <Title>
          <div>Rendimento</div>
          <div>
          <Tooltip
              title="<strong>Lorem Ipsum: </strong><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit imperdiet justo, sit amet porta urna accumsan ut. Nunc fermentum tempus arcu, a sodales dolor fermentum vel. Aliquam faucibus lectus sapien, sit amet viverra massa volutpat ut. Cras egestas elit sed lacus facilisis, at accumsan augue volutpat.</small>"           
            >
              <MdInfoOutline style={{fontSize:"1rem"}} />
            </Tooltip>
          </div>
      </Title>
        <ButtonIndexing/>
      <Labels
      title='Aporte mensal'
      err={inputErr === true} 
      />
        <input
          type='text'
          value={monthAport}
          err={inputErr === true}
          onChange={(e)=> setMonthAport(e.target.value)}
        />
        <ErrComponent>  
        {inputErr && <p style={{color:'red', fontSize:'0.65rem'}}>Aporte deve ser um número</p>}
        </ErrComponent>

      <Labels title='Rentabilidade' />
        <input
          value={rentability}
          placeholder='%'
          onChange={(e)=> setRentability(e.target.value)}
        />
        <ErrComponent/>

      <Labels title='CDI(ao ano)' />
      {cdiIpca.filter(indicator => indicator.nome ==='cdi').map(item =>
          <input
          disabled
            style={{cursor: 'not-allowed', opacity: 0.9}}
            value={`${item.valor} %`}
          />
        )}
        <ErrComponent/>
  
        <ButtonsSend
        validate='true'
        onClick={callObject}
        >
          Simular
        </ButtonsSend>
      </Container>
      <Container>
      {result === true &&
      <div>
        <h3>Resultado</h3>
        <WrapperResult>
        <div>
              <Card>
                <h6>Valor final Bruto</h6>
                {filtered.map((item ) => 
                  <p>
                  R$ {item.valorFinalBruto.toLocaleString('pt-BR')}
                </p>
                )}
                
            
              </Card>
            </div>

            <div>
              <Card>
                <h6>Alíquota do IR</h6>
                {filtered.map(item =>
                <p>
                  {item.aliquotaIR} %
                </p>
                )}
              </Card>
            </div>

            <div>
              <Card>
                <h6>Valor pago em IR</h6>
                {filtered.map(item =>
                <p>
                  R$ {item.valorPagoIR.toLocaleString('pt-BR')}
                </p>
                )}
              </Card>
            </div>

            <div>
              <Card>
                <h6>Valor final líquido</h6>
                {filtered.map(item =>
                <p style={{color:'green'}}>
                  R$ {item.valorFinalLiquido.toLocaleString('pt-BR')}
                </p>
                )}
              </Card>
            </div>

            <div>
              <Card>
                <h6>Valor total investido</h6>
                {filtered.map(item =>
                <p>
                  R$ {item.valorTotalInvestido.toLocaleString('pt-BR')}
                </p>
                )}
              </Card>
            </div>

            <div>
              <Card>
                <h6>Valor final líquido</h6>
                {filtered.map(item =>
                <p style={{color:'green'}}>
                  R$ {item.valorFinalLiquido.toLocaleString('pt-BR')}
                </p>
                )}
              </Card>
            </div>
        </WrapperResult>
      </div>
      }
      </Container>
      
    </Wrapper>
    </>
  );
}