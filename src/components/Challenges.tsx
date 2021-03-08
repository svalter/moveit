import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Challenges.module.css';

export function Challenges(){

    const {challengesCompleted} = useContext(ChallengesContext);
    return(
        <div className={styles.ChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}