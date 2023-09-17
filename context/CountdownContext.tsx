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
  const [countdown, setCountdown] = useState<number>(60); // Initial countdown time in seconds

  const decrease = () =>{
    if(countdown !=0){
      setTimeout(() => {
        setCountdown(countdown - 1);
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
