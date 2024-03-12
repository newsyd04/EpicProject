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
                    <iframe src="http://3.249.198.30:3000/d-solo/a49b8021-fda1-42a9-ad83-29fc07a7312d/pir-sensor-data?orgId=1&from=1709745753460&to=1709775749123&panelId=1" width="100%" height="200" frameBorder="0"></iframe>
                        <h4>Motion Activity</h4>
                    </div>
                    <div className='dashboard-graphs'>
                        <iframe src="https://newsyd04.grafana.net/d-solo/fdev5vjyfdqtcb/pir-sensor-data?orgId=1&from=1709745753460&to=1709746126270&panelId=2" width="100%" height="200px" frameBorder="0"></iframe>
                        <h4>Optimal Heating Times</h4>
                    </div>
                    <div className='dashboard-graphs'>
                        <iframe src="https://newsyd04.grafana.net/dashboard/snapshot/vkvfdPsZrMnnavHsU07FpEWZuXwU7bFB" width="100%" height="200px" frameBorder="0"></iframe>
                        <h4>Device Settings</h4>
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