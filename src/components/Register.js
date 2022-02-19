import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginRegisterLeftSide from "./LoginRegisterLeftSide";
import LoginRegisterWrapper from "./LoginRegisterWrapper";
import LoginRegisterRightSide from "./LoginRegisterRightSide";
import Spinner from "./Spinner";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";



export default function Register() {
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const closePopUp = (e) => {
    e.preventDefault();
    const prevUrl=localStorage.getItem('prevUrl')
    navigate(prevUrl);
  };
  const registerUser=async(data)=> {
    try{
        let registered=false;
     const user= await createUserWithEmailAndPassword(auth,data.email,data.password);
     updateProfile(auth.currentUser, {
      displayName: data.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        const prevUrl=localStorage.getItem('prevUrl');
      setLoading(false);
        setError('');
        navigate(prevUrl);
    
    })
   
}
    catch(err){
        setLoading(false)
        setError(err.message);

    }
}
  const handleForm=async(data)=>{
      setLoading(true);
      const registered=await registerUser(data);
      
      
      

}
  return (
    <>
    
     <LoginRegisterWrapper>
    {loading? <Spinner/>:''}
         
                    {/* <!-- leftside-content - start --> */}
              <LoginRegisterLeftSide error={error} login={false}/>
             
                {/* <!-- leftside-content - end --> */}

                {/* <!-- rightside-content - start --> */}
              {  /* //! Login Form Here    */ }
           <LoginRegisterRightSide handleForm={handleForm} login={false}/>
           
                {/* <!-- rightside-content - end --> */}

                <a onClick={closePopUp} className="popup-modal-dismiss" href="#!">
                  <i className="fas fa-times"></i>
                </a>
            
             </LoginRegisterWrapper>
             
    </>
  );
}
