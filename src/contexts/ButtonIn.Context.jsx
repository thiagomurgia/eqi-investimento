import React, {createContext, useContext, useState} from 'react';

const ButtonContextIn = createContext();

export default function ButtonProviderIndexing({children}){
  const[typeIn, setTypeIn] = useState('pos')

  return(
    <ButtonContextIn.Provider value={{typeIn, setTypeIn}}>
      {children}
    </ButtonContextIn.Provider>
  );
}

export function useButtonIn(){
  const contextIn = useContext(ButtonContextIn)

  const {typeIn, setTypeIn} = contextIn;

  return {typeIn, setTypeIn}
}