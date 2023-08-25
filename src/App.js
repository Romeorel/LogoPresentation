import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                        Personal Assistant
                    </p>
                </div>

            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                        <ProfileCard
                            title = "Alexa"
                            handle= "@alexa99" 
                            imageSrc = {AlexaImage}
                            description="Alexa is a personal assistant for buying things on Amazon" />
                        </div>
                        <div className='column is-4'>
                        <ProfileCard 
                            title = "Cortana" 
                            handle= "@cortana32" 
                            imageSrc= {CortanaImage}
                            description="Cortana is for assistant people on Microsoft based computer"  />
                        </div>
                        <div className='column is-4'>
                        <ProfileCard 
                            title = "Siri" 
                            handle= "@siri01" 
                            imageSrc= {SiriImage} 
                            description="Siri is a personal assistant being out-dated made by Apple" />
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );

}

export default App;