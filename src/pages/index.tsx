import Head from 'next/head';
import { Challenges } from '../components/Challenges';
import { ChallengesBox } from '../components/ChallengesBox';
import { Countdown } from '../components/Countdown';


import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountDownProvider } from '../contexts/CountDownContexts';
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
     
      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <Challenges/>
            <Countdown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
      </CountDownProvider>
    </div>

    
  )
}
