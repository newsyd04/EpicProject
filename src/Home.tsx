import Nav from './Nav';
import Main from './Main';
import deviceRender from './images/finalrender.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        <header className="container">
            <Nav />
        </header>
        <main className="">
            <div className='hero-container grid'>
                <div className='center3'>
                    <h1><b>Energy optimisation for your home</b></h1>
                    <p>Save money and reduce your carbon footprint with our smart home solutions.</p>
                    <p>Manage your devices and view your savings by signing into the dashboard below</p>
                    <Link to="/login" type='button'>Log in to dashboard</Link>
                </div>
                <img src={deviceRender} alt="Brand Logo" className='hero-image-sizing hero-image'/>
            </div>
            <hr />
            <section id='impact-stats'>
                <div className='rowStyling'>
                    <div className='container row-padding'>
                        <div className='column-padding'>
                            <h2>13M+</h2>
                            <h4>Tons of carbon saved</h4>
                        </div>
                        <div className='column-padding'>
                            <h2>192</h2>
                            <h4>Countries available in</h4>
                        </div>
                        <div className='column-padding'>
                            <h2>75K+</h2>
                            <h4>Homes Optimised</h4>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <div className='container'>
                <Main />
            </div>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}

export default Home;