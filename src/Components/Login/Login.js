import React from 'react'
import { Route, Routes } from 'react-router'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

function Login() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LoginForm /> }/>
        <Route path='criar' element={< LoginCreate/> }/>
        <Route path='perdeu' element={< LoginPasswordLost/> }/>
        <Route path='resetar' element={< LoginPasswordReset/> }/> 
      </Routes>
    </div>
  )
}

export default Login
