import React, { useState } from 'react'
import Authlayout from '../../components/layouts/Authlayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Input/ProfilePhotoSelector';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error,setError] = useState(null);

  const navigate = useNavigate();

  //handle SignUp Form submit
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    let profileImageUrl = "";

    if(!fullName){
      setError("Please enter your Name");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError('Please enter the password');
      return;
    }

    setError("")

    //SignUp API Call 
  }

  return (
    <Authlayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account </h3>
        {/* <h3 className='text-2xl font-semibold text-black'>Create an Account </h3> my own version */}
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>
        {/*<p className='text-0.5xl text-slate-700 mt-[5px] mb-6'>Join us today by enterin your details below.</p>
 */}
       
       <form onSubmit={handleSignUp}>

         <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="lavda"
            type="text"
          />

          <Input
           value={email}
           onChange={({target}) => setEmail(target.value)}
           label="Email Address"
           placeholder="YourName@example.com"
           type='text'
           ></Input>

           <div className='col-span-2'>
          <Input
           value={password}
           onChange={({target}) => setPassword(target.value)}
           label="Password"
           placeholder="Min 8 characters"
           type='password'
           ></Input>
           </div>
        </div>

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        
                   <button type="submit" className='btn-primary'>
                    SIGN UP
                   </button>
        
                   <p className='text-[13px] text-slate-800 mt-3'>
                    Already have an Account?{" "}
                    <Link className='font-medium text-primary underline' to='/login'>
                       Login
                    </Link>
                   </p>

       </form>
      </div>

    </Authlayout>
  )


  
}

export default SignUp
