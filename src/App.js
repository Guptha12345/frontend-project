import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './pagess/Home';
import About from './pagess/About';
import Staff from './components/Staff';
import Student from './pagess/Student';
import Gallery from './pagess/Gallery';
import Courses from './pagess/Courses';
import Blog from './pagess/Blog';
import Contact from './pagess/Contact';
import Services from './pagess/Services';
import Help from './pagess/Help';
import StaffSignup from './pagess/StaffSignup';
import Certifications from './pagess/Certifications';
import Careers from './pagess/Careers';
import Tutors from './pagess/Tutors';
import Webinars from './pagess/Webinars';
import Ebooks from './pagess/Ebooks';
import FAQ from './pagess/Faq';
import StudentReg from './pagess/Studentreg';
import DashbordStudent from './pagess/DashbordStudent';
import Admin from './pagess/Admin';
import './App.css';
import ForgotPassword from './pagess/Forgetpasswordstu';
import StaffTaskCenter from './pagess/StaffTaskCenter';
import StudentNotificationCenter from './pagess/StudentNotificationCenter';
import Insertstudent from './pagess/Insertstudent';
import { TaskProvider } from './pagess/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/student" element={<Student />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/staffsignup" element={<StaffSignup />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/studentreg" element={<StudentReg />} />
          <Route path="/dashbordstudent" element={<DashbordStudent />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/forgetpasswordstu" element={<ForgotPassword />} />
          <Route path="/StaffTaskCenter" element={<StaffTaskCenter />} />
          <Route path="/insertstudent" element={<Insertstudent />} />
          <Route path="/StudentNotificationCenter" element={<StudentNotificationCenter />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
