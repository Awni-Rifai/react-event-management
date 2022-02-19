
import { useNavigate } from "react-router-dom";
import LoginRegisterLeftSide from "./LoginRegisterLeftSide";
import LoginRegisterRightSide from "./LoginRegisterRightSide";
import LoginRegisterWrapper from "./LoginRegisterWrapper";
import Spinner from "./Spinner";
import { useState } from "react";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const closePopUp = (e) => {
      e.preventDefault();
      const prevUrl=localStorage.getItem('prevUrl')
      navigate(prevUrl);
    };
    const handleForm=async(data)=>{
        try{
            setLoading(true);
            const userCredentials= await signInWithEmailAndPassword(auth, data.email, data.password);
            if(!userCredentials)return;
            setLoading(false);
            const prevUrl=localStorage.getItem('prevUrl')
            navigate(prevUrl);
            

        }
        catch(err){
            setLoading(false);
            setError(err.message);
        }
      
       
        
    }
  return (
    <>
     
             <LoginRegisterWrapper>
             {loading? <Spinner/>:''}
                    {/* <!-- leftside-content - start --> */}
              <LoginRegisterLeftSide error={error} login={true}/>
                {/* <!-- leftside-content - end --> */}

                {/* <!-- rightside-content - start --> */}
              {  /* //! Login Form Here    */ }
           <LoginRegisterRightSide handleForm={handleForm} login={true}/>
                {/* <!-- rightside-content - end --> */}

                <a onClick={closePopUp} className="popup-modal-dismiss" href="#!">
                  <i className="fas fa-times"></i>
                </a>
            
             </LoginRegisterWrapper>
      
    </>
  );
}
