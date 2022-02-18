import React, {createContext, useContext, useState} from 'react';

const ButtonContextYi = createContext();

export default function ButtonProviderYield({children}){
  const[typeYi, setTypeYi] = useState('bruto')

  return(
    <ButtonContextYi.Provider value={{typeYi, setTypeYi}}>
      {children}
    </ButtonContextYi.Provider>
  );
}

export function useButtonYi(){
  const contextYi = useContext(ButtonContextYi)

  const {typeYi, setTypeYi} = contextYi;

  return {typeYi, setTypeYi}
}