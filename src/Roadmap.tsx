import Nav from './Nav';
import logo from './images/Synergia-logo.png';
import usa from './images/usa-flag.png';
import ireland from './images/ireland-flag.png';
import globe from './images/globe-logo.png';
import settings from './images/settings-logo.png';

function Roadmap() {

    return (
        <div className="container">
            <Nav />
            <div className="container center-4">
                <h2>Our Development Roadmap (2024 - 2030)</h2>
                <div className='roadmap'>
                    <div className='roadmap-container left-container'>
                        <img src={settings} alt='placeholder' />
                        <div className='roadmap-textbox'>   
                            <h2>Product Finalisation and Manufacturing</h2>
                            <small>2024-2025</small>
                            <p>Finalizing the Synergia device's design and software, conducting extensive testing for quality assurance, and establishing production lines with manufacturing partners.</p>
                            <span className='left-container-arrow'/>
                        </div>            
                    </div>

                    <div className='roadmap-container right-container'>
                        <img src={ireland} alt='placeholder' />
                        <div className='roadmap-textbox'>   
                            <h2>Launch in Ireland</h2>
                            <small>2025-2026</small>
                            <p>Initiating targeted marketing campaigns and distribution strategies to introduce Synergia to the Irish market, along with collecting initial user feedback for improvements.</p>
                            <span className='right-container-arrow'/>
                        </div>            
                    </div>

                    <div className='roadmap-container left-container'>
                        <img src={usa} alt='placeholder' />
                        <div className='roadmap-textbox'>   
                            <h2>Entry into the North American Market</h2>
                            <small>2027-2028</small>
                            <p>Expanding Synergia's presence by navigating regulatory environments, customizing marketing efforts, and establishing distribution networks in North America.</p>
                            <span className='left-container-arrow'/>
                        </div>            
                    </div>

                    <div className='roadmap-container right-container'>
                        <img src={globe} alt='placeholder' />
                        <div className='roadmap-textbox'>   
                            <h2>Global Expansion and Diversification</h2>
                            <small>2028-2030</small>
                            <p>Scaling Synergia globally through market research for regional needs, diversifying the product line, and enhancing the supply chain for worldwide distribution.</p>
                            <span className='right-container-arrow'/>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Roadmap;