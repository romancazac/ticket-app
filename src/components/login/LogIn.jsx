import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BtnForm } from '../ui/BtnForm'
import { InputForm } from '../ui/InputForm'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'

export const Login = ({title}) => {

  
   const navigate = useNavigate();
   const[err, setErr] = useState(false)
   const handleSubmit = (e) => {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;

   
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/tickets')
         })
         .catch((error) => {
            setErr(true)
         });
   }
   return (
      <form action="#" className="page-home__form log-form" onSubmit={handleSubmit}>
         <h3 className="log-form__title">
            {title}
         </h3>
         <InputForm name="Login" placeholder="Login" className={'log-form__line_user'} value="admin999@gmail.com"/>
         <InputForm type="password" name="Password" placeholder="Password" className={'log-form__line_pass'} value="123456789"/>
          {err && "Incorect password or login"}       
         <BtnForm name="Sign In"/>
         <div className="log-form__footer">
            <div className="checkbox">
               <input id="formLog" type="checkbox" name="remember" className="checkbox__input _req" />
               <label htmlFor="formLog" className="checkbox__label"><span>Remember me</span></label>
            </div>
            <Link to='create-account'  className="log-form__forg">Create account</Link>
         </div>
      </form>
   )
}
