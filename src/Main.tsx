import React from 'react';
import member1 from './images/member1.jpg';
import member2 from './images/member2.jpg';
import member3 from './images/member3.jpg';
import nestlogo from './images/google-nest.jpg';
import hero2 from './images/hero2.webp';
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
                <div className='hero-container grid'>
                    <div className='center3'>
                        <h2>Our Mission</h2>
                        <p>Welcome to Synergia, where our mission is to revolutionize the way homes and businesses approach heating.</p>                        {/* Instagram Button */}
                        <a href="https://www.instagram.com/yourinstagramhandle/" target="_blank" rel="noopener noreferrer">
                            <button className='secondary'>Follow our success stories on Instagram</button>
                        </a>
                    </div>
                    <img src={hero2} alt="Brand Logo" className='hero-image-sizing hero-image'/>
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
