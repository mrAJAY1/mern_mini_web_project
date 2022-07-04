import React, { useState } from 'react'
import './LoginForm.css';

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="loginForm">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 p-5  login-form-section" >
            <form onSubmit={handleSubmit} className='w-100'>
              <div className="form-group mb-3 w-100">
                <label className="error-Label d-none">Error Occured</label>
                <input type="text" className='d-block  w-100' value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder='example@gmail.com' />
                <small className="text-muted">Enter your email here...</small>
              </div>
              <div className="form-group w-100">
                <label className="error-Label d-none">Error Occured</label>
                <input type="password" className='d-block  w-100' value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
                <small className="text-muted">Enter your Password here...</small>
              </div>
              <div className="form-group" style={{ marginTop: '5%' }}>
                <button className='btn login-submit-btn'> submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

  )
}

export default LoginForm
