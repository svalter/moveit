import { create } from 'node:domain';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallengesContexts';


interface CountDownContextData {
    minutes: number;
    seconds:number;
    hasFinished: boolean;
    IsActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;

}

interface CountDownProviderProps {
    children:ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const counDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({children}:  CountDownProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext);
    

    const [time, setTime] = useState(0.1 * 60);
    const[IsActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    
    function startCountDown()
    {
        setIsActive(true);
    }

    function resetCountDown() {
       
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1*60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (IsActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (IsActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [IsActive, time]);
    
    return (
        <counDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            IsActive,
            startCountDown,
            resetCountDown,

        }}>
            {children}
        </counDownContext.Provider>
    )
}