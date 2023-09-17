// context/CountdownContext.tsx
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface CountdownContextType {
  countdown: number;
  setCountdown: Dispatch<SetStateAction<number>>;
}

const CountdownContext = createContext<CountdownContextType | undefined>(undefined);

interface CountdownProviderProps {
  children: ReactNode;
}

export function CountdownProvider({ children }: CountdownProviderProps) {
  const session = localStorage.getItem("timer") == null ? "0" : localStorage.getItem("timer");
  const [countdown, setCountdown] = useState<number>(session == "0" ? 60 : parseInt(`${session}`));

  const decrease = () =>{
    if(countdown !=0){
      setTimeout(() => {
        setCountdown(countdown - 1);
        localStorage.setItem("timer",`${countdown -1}` );
      }, 1000);

    }
  }

  useEffect(()=>{
    decrease();
  },[countdown])

  return (
    <CountdownContext.Provider value={{ countdown, setCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error('useCountdown must be used within a CountdownProvider');
  }
  return context;
}
