import React from 'react'
import '../main.css'
import Temperature from '../components/temperature.jsx'
import LoginSection from '../components/loginSection.jsx'


const LoginPage = () => {
    return (
      <>
        <Temperature backVisible={true} />
        <LoginSection />
      </>
    );
  };

export default LoginPage

