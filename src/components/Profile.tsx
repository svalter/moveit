import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';


export function Profile() {

    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/svalter.png" alt="Valter Santos" />
            <div>
                <strong>Valter Santos</strong>
                <p>Level {level}</p>
            </div>
        </div>
    )
}