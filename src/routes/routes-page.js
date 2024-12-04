import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients/Patients";
import LogIn from "../pages/Login/LogIn";
import Doctor from "../pages/Doctor/Doctor";
import TreatedPatients from "../pages/TreatedPatients/TreatedPatients";
import PatientExamination from "../pages/PatientExamination/PatientExamination";
import PatientTreatment from "../pages/PatientTreatment/PatientTreatment";
import Department from "../pages/Department/Department";

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
    {
        path: '/doctor',
        component: Doctor
    },
    {
        path: '/department',
        component: Department
    },
    {
        path: '/doctor/:code/treatment/patient',
        component: TreatedPatients
    },
    {
        path: '/patients/:code/examination',
        component: PatientExamination
    },
    {
        path: '/patients/:code/treatment',
        component: PatientTreatment
    }
]

export default routes;