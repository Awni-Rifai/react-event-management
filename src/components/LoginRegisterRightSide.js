import Form from "./Form"

export default function LoginRegisterRightSide({login,handleForm}) {
    const handleFormData=(data)=>{
        handleForm(data)
    }
  return (
         <div className="rightside-content text-center">
                  <div className="mb-30">
                    <h2 className="form-title title-large white-color">
                      Account <strong>{login?'Login':'Register'}</strong>
                    </h2>
                    <span className="form-subtitle white-color">
                      {login?'login':'register'} to our website, or <strong> {!login?'LOGIN':'REGISTER'}</strong>
                    </span>
                  </div>

              
                  <div className="or-text mb-30">
                    <span>or {login?'sign in':'sign up'}</span>
                  </div>

                  <div className="login-form text-center mb-50">
                   <Form handleForm={handleFormData} login={login}/>
                  </div>

               
                </div>
  )
}
