import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients/Patients";
import LogIn from "../pages/Login/LogIn";

const routes = [
    {
        path: '/',
        component: LogIn
    }, 
    {
        path: '/home',
        component: Dashboard
    },
    {
        path: '/patients',
        component: Patients
    },
]

export default routes;