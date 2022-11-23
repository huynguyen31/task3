import './App.css';
import { NavBar, HeroLayout1, ReviewCardCollection } from './ui-components';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider } from '@aws-amplify/ui-react';

function Home() {
    return (
        <div>
            <AmplifyProvider>
                <HeroLayout1></HeroLayout1>
                <NavBar />
                <ReviewCardCollection />
            </AmplifyProvider>
        </div>
    )
}

export default Home;