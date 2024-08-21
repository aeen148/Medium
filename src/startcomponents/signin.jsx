
import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const SignIn = (props) => {
  const [acc, setAcc] = useState({
    gmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    gmail: yup.string().email('email format is incorrect').required('email is reqired'),
    password: yup.string().min(8, 'password must be 8 charachets').required('password in required')
  });

  const validateForm = async () => {
    try {
      await schema.validate(acc, { abortEarly: false });
      setErrors({});
      return true; 
    } 
    catch (err) {
      const newErrors = {};
      err.inner.forEach(error => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      //const response=axios.post('');
      console.log(acc);
      console.log('handled');
    }
  };

  const handleGmailChange = (e) => {
    setAcc({ ...acc, gmail: e.target.value });
  };

  const handlePassChange = (e) => {
    setAcc({ ...acc, password: e.target.value });
  };

  return (
    <>
    
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '500px', height: '300px', position: 'absolute', backgroundColor:'white', borderRadius:'15px'}}
      >
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
          <label htmlFor="i1" style={{ marginBottom: '10px' }}>Gmail</label>
          <input onChange={handleGmailChange} id="i1" style={{ marginBottom: '10px' }} value={acc.gmail} />
          {errors.gmail && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.gmail}</div>}
          <label htmlFor="password" style={{ marginBottom: '10px' }}>Password</label>
          <input onChange={handlePassChange} id="password" type="password" value={acc.password} style={{ marginBottom: '20px' }} />
          {errors.password && <div style={{ color: 'red', marginBottom: '20px' }}>{errors.password}</div>}
          
          <button style={{fontWeight: 'bold', backgroundColor: '#4285F4', border: 'none', borderRadius: '3px', padding: '10px 20px'}}>
            Continue
          </button>
        </form>
      </div>
    </div>


    </>
  );
};

export default SignIn;




