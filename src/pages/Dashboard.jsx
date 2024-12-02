import Overview from "../components/Overview/Overview"
import PatientOverview from "../components/PatientOverview/PatientOverview"

const Dashboard = () => {
    return(
        <div className="content">
            <Overview/>
            <PatientOverview/>
        </div>
    );
}

export default Dashboard;