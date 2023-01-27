import React from 'react'
import { BtnForm } from '../ui/BtnForm'
import { InputForm } from '../ui/InputForm'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


import { auth, storage, db } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

export const Registration = ({title}) => {
  const navigate = useNavigate()
   const [err, setErr] = React.useState(false);
   const [loading, setLoading] = React.useState(false);
   const handleForm = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              
             
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
          
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
      navigate('/tickets');
   };
   console.log(auth)
   return (
      <form action="#" className="page-home__form log-form" onSubmit={handleForm}>
         <h3 className="log-form__title">
            {title}
         </h3>

         <InputForm name="Name" placeholder="Name" className={'log-form__line_user'}/>
         <InputForm name="email" placeholder="Email" className={'log-form__line_user'}/>
         <InputForm type="password" name="Password" placeholder="Password" className={'log-form__line_pass'}/>
         <InputForm type="file" name="file" placeholder="file" className={'log-form__line_file'}/>

          <BtnForm name="Registration"/>  

         <div className="log-form__footer">
            <div className="checkbox">
               <input id="formLog" type="checkbox" name="remember" className="checkbox__input _req" />
               <label htmlFor="formLog" className="checkbox__label"><span>Remember me</span></label>
            </div>
            <Link to="/" className="log-form__forg">Log in</Link>
            
         </div>
      </form>
   )
}
