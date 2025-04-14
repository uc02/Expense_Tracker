import React, { useState } from 'react'
import Authlayout from '../../components/layouts/Authlayout'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //handle Login Form submit

  const handleLogin = async (e) => {}

  return (
    <Authlayout>
      <div className='lg:w-[70] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>
          Welcome Back
          </h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
           value={email}
           onChange={({target}) => setEmail(target.value)}
           label="Email Address"
           placeholder="jay@example.com"
           type='text'
           ></Input>
        </form>
      </div>
    </Authlayout>
  )
}

export default Login
