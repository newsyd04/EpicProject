import Main from './Main';
import InnerNav from './InnerNav';
function Inner(){
    return (
        <>
        <header className="container">
            <InnerNav />
        </header>
        <main className="container dashboard-container">
            <div className='container '>
                <h1>Welcome to Your Device Dashboard</h1>
                <p>View Analytics and Control Operations from Here.</p>
                <hr />
                <div className='grid'>
                    <div className='dashboard-graphs'>
                    <iframe src="http://34.245.209.91:3000/d-solo/adfgkoaumt5ogd/pir-sensor-data?orgId=1&from=1709745753460&to=1709775749123&panelId=2" width="100%" height="200px" frameBorder="0"></iframe>
                        <h4>Motion Activity</h4>
                    </div>
                    <div className='dashboard-graphs'>
                    <iframe src="http://34.245.209.91:3000/d-solo/adfgkoaumt5ogd/pir-sensor-data?orgId=1&from=1709743336078&to=1709767220224&panelId=1" width="100%" height="200px" frameBorder="0"></iframe>
                        <h4>Optimal Heating Times</h4>
                    </div>
                    <div className='dashboard-graphs'>
                    <iframe src="http://34.245.209.91:3000/d-solo/adfgkoaumt5ogd/pir-sensor-data?orgId=1&from=1709743336078&to=1709767220224&panelId=3" width="100%" height="200px" frameBorder="0"></iframe>
                        <h4>Activity Monitor Chart</h4>
                    </div>
                </div>
            </div>
        </main>
        <footer>
        </footer>
        </>
    );
}

export default Inner;