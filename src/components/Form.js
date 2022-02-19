import Input from "./Input"
import { inputsData,LoginInputsCheck,RegisterInputsCheck,RegisterInputData,LoginInputData } from "./inputData";
import { useEffect, useState } from "react";

export default function Form(props) {
   
    const [loginInputs,setLoginInputs]=useState([]);
    const [isValid, setIsValid] = useState(false);
    const [inputs, setInputs] = useState(props.login?LoginInputData:RegisterInputData);
    const [errorCheck, setErrorCheck] = useState(props.login?LoginInputsCheck:RegisterInputsCheck);
      useEffect(()=>{
       
        for (const check in errorCheck) {
            if (errorCheck[check] === false) {
              setIsValid(false);
              return;
            }
          }
          setIsValid(true);

    },[inputs])
    const saveInputs = (name, input, check) => {
        

        setErrorCheck((prevState) => {
         
          prevState[name] = check;
          return {
            ...prevState,
          };
        });
        setInputs((prevState) => {
            prevState[name] = input;
            return {
              ...prevState,
            };
          });
    }
    useEffect(()=>{
        if(props.login)setLoginInputs(inputsData.filter(input=>input.login===true))
        else setLoginInputs(inputsData)
         
        

    },[])
    const handleForm=(e)=>{
        e.preventDefault();
        props.handleForm(inputs);
    }
   

  return (
    <form onSubmit={handleForm}>
        {loginInputs.map(input=>{
            return(
                <div className="form-item">
               <Input
               key={input.id}
               {...input}
               saveInputs={saveInputs}
               inputData={inputs}
               />
              </div> 
            )
        })}
    <button 
    type={isValid ? "submit" : "button"}
     className="login-btn"
     style={{ opacity: isValid ? "1" : "0.4" }}

    >
      {props.login?'login now':'Register now'}
    </button>
  </form>
  )
}
