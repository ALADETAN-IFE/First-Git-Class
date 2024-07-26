import React, { useEffect, useState } from "react";
import {
  Mainbody,
  Header,
  FormWrapper,
  Form,
  FormHeader,
  FormBody,
  Input,
  InputPassworrdDiv,
  FormBtn,
  Or,
  OrtherWise,
  PassInfo,
} from "./AuthStyle";
import Loading from "../Components/Loading/Loading";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"; 

const SignUp = () => {
  const [Loader, setLoader] = useState(true);
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);

  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const [ConfirmPassword, setConfirmPassword] = useState();
  const [EmailError, setEmailError] = useState([false, ""]);
  const [PasswordErrorCheck, setPasswordErrorCheck] = useState(false);
  const [PasswordErrorLow, setPasswordErrorLow] = useState(false);
  const [PasswordErrorLength, setPasswordErrorLength] = useState(false);
  const [PasswordErrorUpper, setPasswordErrorUpper] = useState(false);
  const [PasswordErrorNumber, setPasswordErrorNumber] = useState(false);
  const [PasswordErrorSymbol, setPasswordErrorSymbol] = useState(false);
  const [ConfirmPasswordErrorCheck, setConfirmPasswordErrorCheck] = useState(false);
  // console.log(PasswordErrorCheck)
  const [loading, setloading] = useState(false)

  const Navigate = useNavigate()

  const handleUserName = (e) => {
    const newData = e.target.value;
    setUserName(newData);
  };

  const changeEmailErrorState = (position, change, old) => {
    EmailError.map((e, i) => {
      if (i === position) {
        const not = EmailError.findIndex((e, i) => i !== position);
        EmailError[not] = old;
        EmailError[i] = change;
        return e;
      }
    });
  };

  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email
    if (newEmail.trim() === "") {
      toast.error("Email is required");
      changeEmailErrorState(0, "false", "");
    } else if (!validateEmail(newEmail)) {
      changeEmailErrorState(0, "true", "Invalid email format");
      changeEmailErrorState(1, "Invalid email format", "true");
    }else{
      changeEmailErrorState(0, "false", "");
    }
  };

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };

  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };

  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
      setPasswordErrorCheck(false);
    }
    if (
      newData.length > 7 &&
      PasswordErrorLow == true &&
      PasswordErrorUpper == true &&
      PasswordErrorNumber == true &&
      PasswordErrorSymbol == true
    ) {
      setPasswordErrorCheck(false);
    } else {
      setPasswordErrorCheck(true);
    }

    if (newData.length >= 8) {
      setPasswordErrorLength(true);
    } else {
      setPasswordErrorLength(false);
    }

    if (containsLowercase(newData)) {
      setPasswordErrorLow(true);
    } else {
      setPasswordErrorLow(false);
    }

    if (containsUpperrcase(newData)) {
      setPasswordErrorUpper(true);
    } else {
      setPasswordErrorUpper(false);
    }

    if (containsNumber(newData)) {
      setPasswordErrorNumber(true);
    } else {
      setPasswordErrorNumber(false);
    }

    if (containsSymbol(newData)) {
      setPasswordErrorSymbol(true);
    } else {
      setPasswordErrorSymbol(false);
    }
  };

  const handleConfirmPassword = (e) => {
    const newData = e.target.value;
    setConfirmPassword(newData);

    if (newData == Password) {
      setConfirmPasswordErrorCheck(false);
    } else {
      setConfirmPasswordErrorCheck(true);
    }
  };

 
  const load = () => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    load();
  },[]);

  const handleSignUp = async () => {
    // const url = "https://classmovback.onrender.com/api"
    const url = "https://classmovback.onrender.com/api"
    if(!UserName || !Email || !Password || Password !== ConfirmPassword){
      toast.error("All fields are required and check for errors")
    }else{
      setloading(true)
      try {
        const userDetails ={
          userName : UserName,
          email: Email,
          password: Password,
        }
        // /ap1/
        const res = await axios.post(`${url}/register`, userDetails)
        console.log(res)
        setloading(false)
        toast.success(res?.data?.data.message)
        Navigate("/")
        
      } catch (error) {
        console.log(error)
        setloading(false)
        toast.success(error?.response?.data.message)
      }
    }
  }

  return (
    <>
      {Loader ? (
        <Loading />
      ) : (
        <Mainbody>
          <Header>BountyMiex</Header>
          <FormWrapper>
            <Form auth>
              <FormHeader>Sign Up</FormHeader>
              <FormBody>
                <Input
                  type="text"
                  placeholder="Username"
                  onChange={handleUserName}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  onChange={handleEmail}
                />
                {EmailError[0] && EmailError[1].length > 0 ? (
                  <span style={{ color: "red" }}> {EmailError[1]}</span>
                ) : null}
                <InputPassworrdDiv>
                  <Input
                    pass
                    type={ShowPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handlePassword}
                  />
                  {ShowPassword ? (
                    <FaRegEye
                      className="eye"
                      onClick={() => setShowPassword(!ShowPassword)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="eye"
                      onClick={() => setShowPassword(!ShowPassword)}
                    />
                  )}
                </InputPassworrdDiv>
                {PasswordErrorCheck ? (
                  <PassInfo>
                    {/* Must include */}
                    {PasswordErrorLow ? (
                      <span style={{ color: "green" }}> Lowercase, </span>
                    ) : (
                      <span style={{ color: "red" }}> Lowercase, </span>
                    )}
                    {PasswordErrorUpper ? (
                      <span style={{ color: "green" }}> Capital, </span>
                    ) : (
                      <span style={{ color: "red" }}> Capital, </span>
                    )}
                    {PasswordErrorNumber ? (
                      <span style={{ color: "green" }}> Number, </span>
                    ) : (
                      <span style={{ color: "red" }}> Number, </span>
                    )}
                    {PasswordErrorSymbol ? (
                      <span style={{ color: "green" }}> Symbol, </span>
                    ) : (
                      <span style={{ color: "red" }}> Symbol, </span>
                    )}
                    {PasswordErrorLength ? (
                      <span style={{ color: "green" }}> 8 characters long</span>
                    ) : (
                      <span style={{ color: "red" }}> 8 characters long</span>
                    )}
                  </PassInfo>
                ) : null}

                <InputPassworrdDiv>
                  <Input
                    pass
                    type={ShowConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    onChange={handleConfirmPassword}
                  />
                  {ShowConfirmPassword ? (
                    <FaRegEye
                      className="eye"
                      onClick={() =>
                        setShowConfirmPassword(!ShowConfirmPassword)
                      }
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="eye"
                      onClick={() =>
                        setShowConfirmPassword(!ShowConfirmPassword)
                      }
                    />
                  )}
                </InputPassworrdDiv>
                {ConfirmPasswordErrorCheck ? (
                  <span style={{ color: "red" }}> Passwords do not match</span>
                ) : null}
                <FormBtn sub_btn 
                onClick={handleSignUp}> {
                  loading ? "loading..."
                  : "SignUp"
                  } </FormBtn>
                <Or>Or</Or>
                <FormBtn>
                  {" "}
                  <FcGoogle />
                  SignUp with Google
                </FormBtn>
                <OrtherWise>
                  Already have an Account{" "}
                  <span onClick={() => Navigate("/")}> Sign In</span>{" "}
                </OrtherWise>
              </FormBody>
            </Form>
          </FormWrapper>
        </Mainbody>
      )}
    </>
  );
};

export default SignUp;
