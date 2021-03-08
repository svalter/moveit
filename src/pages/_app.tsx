import '../styles/global.css';

import { ChallengesContext, ChallengesProvider} from '../contexts/ChallengesContexts';
import { CountDownProvider } from '../contexts/CountDownContexts';

function MyApp({ Component, pageProps }) {
  return(
    
  <ChallengesProvider>
    <CountDownProvider>
      <Component {...pageProps} />
    </CountDownProvider>     
  </ChallengesProvider>  
    
    )
}

export default MyApp
