import { BrowserRouter,Route, Switch} from 'react-router-dom'
import Layout from './Layout/Layout'
import AmbulanceManagment from './Pages/AmbulanceManagment'
import BIllingCollection from './Pages/BIllingCollection'
import ClinicalManagment from './Pages/ClinicalManagment'
import DischargeManagment from './Pages/DischargeManagment'
import Doctor from './Pages/Doctor'
import Emergency from './Pages/Emergency'
import FeedBAckManagment from './Pages/FeedBAckManagment'
import FinacialManagment from './Pages/FinacialManagment'
import HRManagment from './Pages/HRManagment'
import InPatientManagment from './Pages/InPatientManagment'
import InsuranceClaim from './Pages/InsuranceClaim'
import Inventory from './Pages/Inventory'
import Laboratory from './Pages/Laboratory'
import MortualyManagment from './Pages/MortualyManagment'
import NurcingStation from './Pages/NurcingStation'
import PatientRegistration from './Pages/PatientRegistration'
import ProcedureRoom from './Pages/ProcedureRoom'
import ReportAnalysis from './Pages/ReportAnalysis'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import All from './Pages/All'

export const  App=()=> {
    return (<BrowserRouter>
      <Layout>
                <Switch>
                    <Route path='/' exact>
                        <All />
                    </Route>
                    <Route path='/Doctor'>
                        <Doctor/>
                    </Route>
                    <Route path='/PatientRegistration'>
                        <PatientRegistration/>
                    </Route>
                    <Route path='/ClinicalManagment'>
                        <ClinicalManagment/>
                    </Route>
                    <Route path='/Emergency'>
                        <Emergency />
                    </Route>
                    <Route path='/ProcedureRoom'>
                        <ProcedureRoom />
                    </Route>
                    <Route path='/InPatientManagment'>
                        <InPatientManagment />
                    </Route>
                    <Route path='/NurcingStation'>
                        <NurcingStation />
                    </Route>
                    <Route path='/BIllingCollection'>
                        <BIllingCollection/>
                    </Route>
                    <Route path='/InsuranceClaim'>
                        <InsuranceClaim/>
                    </Route>
                    <Route path='/Laboratory'>
                        <Laboratory />
                    </Route>
                    <Route path='/DischargeManagment'>
                        <DischargeManagment />
                    </Route>
                    <Route path='/MortualyManagment'>
                        <MortualyManagment />
                    </Route>
                    <Route path='/FeedBAckManagment'>
                        <FeedBAckManagment />
                    </Route>
                    <Route path='/Inventory'>
                        <Inventory/>
                    </Route>
                    <Route path='/AmbulanceManagment'>
                        <AmbulanceManagment/>
                    </Route>
                    <Route path='/HRManagment'>
                        <HRManagment/>
                    </Route>

                    <Route path='/ReportAnalysis'>
                        <ReportAnalysis />
                    </Route>
                    <Route path='/FinacialManagment'>
                        <FinacialManagment />
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>

                </Switch>
            </Layout>
  </BrowserRouter>
    )
}

export default App