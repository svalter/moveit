import { createContext, useState, ReactNode} from 'react';
import challenges from '../../challenges.json';



interface Challenge {
    type: 'body';
    description: string;
    amount: number;

}

interface ChallengesProviderProps {
    children: ReactNode
}

interface ChallengesContextData {
    level: number;
    activeChallenge: Challenge;
    levelup: () => void;
    currentExperience: number;
    challengesCompleted:number;
    experienceToNextLevel:number;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () =>void;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const[challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1)* 4, 2)
    
    function levelup() {
        setLevel(level + 1);
    }

    function startNewChallenge(){
       
        const ramdomChallengeIndex =Math.floor(Math.random() * challenges.length)
        const challenge = challenges[ramdomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }


    function completeChallenge() {
        if(! activeChallenge) {
            return;
        }

        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel) {
           finalExperience = finalExperience - experienceToNextLevel;
            levelup()
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }
    return(
        <ChallengesContext.Provider 
        value={{
            level,
             levelup,
             completeChallenge,
             currentExperience,
             challengesCompleted,
             activeChallenge,
             experienceToNextLevel,
             resetChallenge,
             startNewChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )
}