import * as validate from "./validate";
export const inputsData = [
  {
    name: "name",
    validate: validate.validateName,

    type: "text",
    id: 1,
    placeholder: "Enter your name",
    login:false,
  },
  {
    name: "email",
    validate: validate.validateEmail,

    type: "email",
    id: 2,
    placeholder: "enter your email",
    login: true,
  },
  {
    name: "password",
    validate: validate.validatePassword,

    type: "password",
    id: 3,
    placeholder: "enter you password",
    login: true,
  },
  {
    validate: validate.confirmPassword,
    name: "confirmPassword",

    type: "password",
    id: 4,
    placeholder: "enter password confirmation",
    login:false,
  },
];
export const RegisterInputsCheck={
    name: false,
        email: false,
        password: false,
        confirmPassword: false,
}
export const LoginInputsCheck={
   
        email: false,
        password: false,
   
}
export const  RegisterInputData={
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  }
export const  LoginInputData={
    email: "",
    password: "",
   
  }
