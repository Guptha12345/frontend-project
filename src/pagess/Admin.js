import React, { useState } from 'react';
import './Admin.css';  // Import the scoped CSS file

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('staff');
  const [staff, setStaff] = useState({ name: '', email: '', department: '' });
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Example validation, replace with real authentication logic
    if (loginCredentials.username === 'admin' && loginCredentials.password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleStaffChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const addStaff = (e) => {
    e.preventDefault();
    console.log('Staff Details:', staff);
    setStaff({ name: '', email: '', department: '' });
  };

  const addStudent = (e) => {
    e.preventDefault();
    console.log('Student Details:', student);
    setStudent({ name: '', email: '', course: '' });
  };

  return (
    <div className="admin-page-container">
      {!isLoggedIn ? (
        <div className="login-section">
          <div className="login-card">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input type="text" name="username" value={loginCredentials.username} onChange={handleLoginChange} />
              </label>
              <label>
                Password:
                <input type="password" name="password" value={loginCredentials.password} onChange={handleLoginChange} />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="admin-dashboard">
          <header className="admin-header">
            <h1>Admin Dashboard</h1>
            <nav>
              <button onClick={() => handleTabChange('staff')} className={activeTab === 'staff' ? 'active' : ''}>Staff</button>
              <button onClick={() => handleTabChange('student')} className={activeTab === 'student' ? 'active' : ''}>Student</button>
            </nav>
          </header>

          <main className="admin-main-content">
            {activeTab === 'staff' && (
              <div className="admin-section">
                <h2>Add Staff Member</h2>
                <form onSubmit={addStaff}>
                  <label>
                    Name:
                    <input type="text" name="name" value={staff.name} onChange={handleStaffChange} />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" value={staff.email} onChange={handleStaffChange} />
                  </label>
                  <label>
                    Department:
                    <input type="text" name="department" value={staff.department} onChange={handleStaffChange} />
                  </label>
                  <button type="submit">Add Staff</button>
                </form>
              </div>
            )}

            {activeTab === 'student' && (
              <div className="admin-section">
                <h2>Add Student</h2>
                <form onSubmit={addStudent}>
                  <label>
                    Name:
                    <input type="text" name="name" value={student.name} onChange={handleStudentChange} />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email" value={student.email} onChange={handleStudentChange} />
                  </label>
                  <label>
                    Course:
                    <input type="text" name="course" value={student.course} onChange={handleStudentChange} />
                  </label>
                  <button type="submit">Add Student</button>
                </form>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
