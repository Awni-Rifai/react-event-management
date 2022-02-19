import React from "react";

import { useState } from "react";

export default function Input(props) {
    const [input,setInput]=useState('');
    const [error,setError]=useState('')
    


  const inputHandler = (e) => {
    try{
        setInput(e.target.value);
        if(e.target.name==='confirmPassword'){
            
            props.validate(props.inputData.password,e.target.value);
        }
        else{
            props.validate(e.target.value);
        }
      
        setError('')

      }
      catch(err){
          setError(err.message)
         
      }
           
};
const blurHandler=(e)=>{
   let check;
    if(error==='' && input!==''){
        check=true
    }
    else{
        check=false;
    }
    props.saveInputs(e.target.name,e.target.value,check)

}
  

  return (
   <>
     
        <input
          style={{border:error===''?'initial':'4px solid red',margin:'0rem'}}
          value={input}
          onChange={inputHandler}
          onBlur={blurHandler}
          onKeyUp={blurHandler}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
        />
         <small
          key={Math.random()}
          id="nameErr"
          style={{
            
            color: "white",
            fontWeight: "bold",
            fontSize: "0.7rem",
            opacity:error !== "" ? "1" : "0",
            backgroundColor:'red',
            padding:'0.2rem 2rem',
            margin:'0.4rem 0rem'
          }}
        >
          { error||'error' }
        </small>
        </>
   
  );
}
