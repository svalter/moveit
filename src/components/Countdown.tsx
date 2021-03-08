
import { userInfo } from 'node:os';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { counDownContext } from '../contexts/CountDownContexts';
import styles from '../styles/components/Countdown.module.css';



export function Countdown()
{

    const{minutes,
         seconds,
         hasFinished,
         IsActive,
         startCountDown,
         resetCountDown} = useContext(counDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    




    return(
        <div>
            <div className={styles.countDownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
         </div>

         {hasFinished ? (
             <button 
             disabled      
             className={styles.countDownButton}
             >
                 Ciclo Encerrado
             </button>
         ) : (
             <>
             {IsActive ? (
             <button 
             type="button"
             className={`${styles.countDownButton}  ${styles.countDownButtonActive}`}
             onClick={resetCountDown}
             >
                 Abandonar Ciclo
             </button>

         ) : 
            <button 
             type="button"
            className={styles.countDownButton}
            onClick={startCountDown}
         >
             Iniciar um ciclo
            </button>
         }

             </>
         )
         
         }

         
         
        </div>
        
    )
}