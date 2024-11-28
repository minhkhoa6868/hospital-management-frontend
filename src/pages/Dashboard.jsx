import Overview from "../components/Overview/Overview"
import PatientList from "../components/PatientList/PatientList"

const Dashboard = () => {
    return(
        <div className="content">
            <Overview/>
            <PatientList/>
        </div>
    );
}

export default Dashboard;