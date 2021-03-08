import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { counDownContext } from '../contexts/CountDownContexts';
import styles from '../styles/components/ChallengesBox.module.css';


export function ChallengesBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountDown} = useContext(counDownContext);

    function handleChallengeSucceded() {
        completeChallenge();
    }

    function handleChallengeFaield() {
        completeChallenge();
        resetChallenge();
    }

    return (

        <div className={styles.challengesBoxContainer}>

            {activeChallenge ? (

                <div className={styles.challengesActive}>
                    <header> Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src="icons/body.jpg"  style={{width: "12rem"}}/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button 
                        
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFaield}>
                            
                        Falhei                        
                        </button>

                        <button
                        type="button"
                        className={styles.challengeSeccededButton}
                        onClick={handleChallengeSucceded}>
                            Completei
                        </button>
                    </footer>/


                </div>
            )

                : (

                    <div className={styles.challengesNotActive}>

                        <strong>Finalize um ciclo para receber um desafio
                </strong>
                        <p>
                            <img src="icons/levelup.jpg" alt="level up" style={{ width: "6rem" }} />
                    Avance de nível completando desafios.
                </p>
                    </div>
                )}

        </div>
    )
}