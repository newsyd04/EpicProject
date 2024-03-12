import React from 'react';
import member1 from './images/member1.jpg';
import member2 from './images/member2.jpg';
import member3 from './images/member3.jpg';
import nestlogo from './images/google-nest.jpg';
import FAQ from './FAQ';

function Main() {
    return (
        <>
            <section id="google-nest-integration"> {/* Added id for anchor */}
                <article className="row-padding">
                    <img src={nestlogo} alt="Google Nest Logo" className='NestStyling'/>
                    <div>
                        <h3>Google Nest Integration</h3>
                        <p>Integrate your Synergia devices with Google Nest today!</p>
                    </div>
                </article>
            </section>
            <section id="our-mission"> {/* Added id for anchor */}
                <div className='center'>
                    <h2>Our Mission</h2>
                    <p>Welcome to SmartHeatSaver, where our mission is to revolutionize the way homes and businesses approach heating. In a world increasingly aware of the need for environmental sustainability and the impact of energy consumption on our planet, we strive to provide innovative solutions that not only reduce your energy bills but also contribute to a healthier environment.</p>
                    <p className='SecondText'>Founded by a team of passionate engineers and environmentalists, SmartHeatSaver began with a simple idea: to make energy efficiency accessible and straightforward for everyone. We understand that the choices we make in our daily lives have a significant impact on our world. That's why our devices are designed to optimize your heating system's performance, ensuring comfort without waste.</p>
                    {/* Instagram Button */}
                    <a href="https://www.instagram.com/yourinstagramhandle/" target="_blank" rel="noopener noreferrer">
                        <button className='secondary'>See our success stories on Instagram</button>
                    </a>
                </div>
            </section>
            {/* <section>
                <article className="SectionStyling">
                    <h2>Our Team</h2>
                    <p>This is our creative and hardworking group of software engineers.</p>
                    <div className="grid">
                        <div className='center'><img src={member1} alt="Brand Logo"/>Mr John Foley - Head Engineer</div>
                        <div className='center'><img src={member2} alt="Brand Logo"/>Kevin Durant - Bottom Engineer</div>
                        <div className='center'><img src={member3} alt="Brand Logo"/>Michael Foley - Head of Marketing</div>
                    </div>
                </article>
            </section> */}
            <section><FAQ/></section>
        </>
    );
}

export default Main;
