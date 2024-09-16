import React, { useState } from 'react';
import axios from 'axios';


const Form = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    batchNo: '',
    paidFeeAmount: '',
    paidFeeStatus: '',
    totalfee: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // To hold the specific error message
  const [showStudentFields, setShowStudentFields] = useState(true);
  const [showFeeFields, setShowFeeFields] = useState(false);

  // Retrieve the token from localStorage
  const token = localStorage.getItem('authToken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format data to match API requirements
    const postData = {
      userrole: {
        username: formData.name,
        email: formData.email,
      },
      mobile_no: parseInt(formData.phone, 10),
      batch: formData.batchNo,
      fee: {
        amount_paid: parseFloat(formData.paidFeeAmount) || 0,
        fee_status: formData.paidFeeStatus,
        total_amount: parseFloat(formData.totalfee) || 0,
      },
    };

    console.log('Posting Data:', postData);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/studentportal/createstudent/',
        postData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response Data:', response.data);
      setRegistrationSuccess(true);
      setRegistrationError(false);
      setErrorMessage('');

      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        batchNo: '',
        paidFeeAmount: '',
        paidFeeStatus: '',
        totalfee: '',
      });

      // Optionally close the popup after successful registration
      if (closePopup) closePopup();
      
    } catch (error) {
      console.error('AxiosError:', error);
      setRegistrationError(true);
      setRegistrationSuccess(false);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || 'Registration failed. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  const toggleStudentFields = () => {
    setShowStudentFields(true);
    setShowFeeFields(false);
  };

  const toggleFeeFields = () => {
    setShowFeeFields(true);
    setShowStudentFields(false);
  };

  return (
    <div className='cont'>
      <form className='student-form-container' onSubmit={handleSubmit}>
        <div className='form-sections'>
          <div
            className={`form-section ${showStudentFields ? 'active' : ''}`}
            onClick={toggleStudentFields}
          >
            <h2>Student Registration</h2>
          </div>
        </div>

        <div className='form-content'>
          {showStudentFields && (
            <>
              <div className='student-form-row'>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Student Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='student-form-row'>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Enter Student Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='student-form-row'>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Student Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='student-form-row'>
                <label htmlFor="batchNo">Batch No:</label>
                <input
                  type="text"
                  id="batchNo"
                  name="batchNo"
                  placeholder="AB-00"
                  value={formData.batchNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='student-form-row'>
                <label htmlFor="totalfee">Total amount:</label>
                <input
                  type="number"
                  id="totalfee"
                  name="totalfee"
                  value={formData.totalfee}
                  onChange={handleChange}
                />
              </div>

              <div className='student-form-row'>
                <label htmlFor="paidFeeAmount">Paid Fee Amount:</label>
                <input
                  type="number"
                  id="paidFeeAmount"
                  name="paidFeeAmount"
                  value={formData.paidFeeAmount}
                  onChange={handleChange}
                />
              </div>

              <div className='student-form-row'>
                <label htmlFor="paidFeeStatus">Paid Fee Status:</label>
                <select
                  id="paidFeeStatus"
                  name="paidFeeStatus"
                  value={formData.paidFeeStatus}
                  onChange={handleChange}
                >
                  <option value="">Select status</option>
                  <option value="pending">Pending</option>
                  <option value="paid">Paid</option>
                </select>
              </div>

              <div className='student-form-row'>
                <button type="submit">Submit</button>
              </div>
            </>
          )}

          {registrationSuccess && (
            <div className="message success-message">
              <p>Registration successful!</p>
            </div>
          )}

          {registrationError && (
            <div className="message error-message">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
