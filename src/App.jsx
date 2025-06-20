import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import OTPVerification from './components/Auth/OTPVerification';
import ResetPassword from './components/Auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { AuthProvider } from './context/GlobalContext';

// import StepByStepGuide from './pages/Features/StepByStepGuide';
// import AppointmentFinder from './pages/Features/AppointmentFinder';
// import PDFFormFiller from './pages/Features/PDFFormFiller';
// import ReminderCenter from './pages/Features/ReminderCenter';

function App() {
  return (
    // Wrap the Router outside AuthProvider
    <Router>
      <AuthProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="verify-email" element={<OTPVerification />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />

              {/* <Route path="step-by-step-guide" element={<StepByStepGuide />} />
            <Route path="appointment-finder" element={<AppointmentFinder />} />
            <Route path="pdf-form-filler" element={<PDFFormFiller />} />
            <Route path="reminder-center" element={<ReminderCenter />} /> */}
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
      </AuthProvider>
    </Router>
  );
}

export default App;
