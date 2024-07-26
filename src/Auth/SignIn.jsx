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
import { useDispatch } from "react-redux";
import { addToken } from "../Global/Redux-actions/PlaylistSlice";

const SignIn = () => {
  const [Loader, setLoader] = useState(true)
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email
    if (newEmail.trim() === "") {
      toast.error("Email is required");
    }
  };

  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
    }
  };

  const Navigate = useNavigate();
  const load = () => {

    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };
  // const  = () => {
  //   Navigate("/BountyMiex")
  //   toast.success("You have successfully signed in");
  // };]

  const Dispatch = useDispatch()

  const handleSignIn = async () => {
    const url = "https://classmovback.onrender.com/api"
    // 
    if( !Email || !Password ){
      toast.error("All fields are required and check for errors")
    }else{
      // setloading(true)
      try {
        const userDetails ={
          email: Email,
          password: Password,
        }
        // /ap1/
        const res = await axios.post(`${url}/login`, userDetails)
        console.log(res)
        // setloading(false)
        toast.success("successfully logedin")
        Dispatch(addToken(res?.data?._id))
        Navigate(`/BountyMiex/${res?.data?._id}`)

      } catch (error) {
        console.log(error)
        // setloading(false)
        toast.success(error?.response?.data.message)
      }
    }
  }
  useEffect(() => {
    load();
  },[]);

  return (
    <>
      {Loader ? (
        <Loading />
      ) : (
        <Mainbody>
          <Header>BountyMiex</Header>
          <FormWrapper>
            <Form>
              <FormHeader>Sign In</FormHeader>
              <FormBody>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={handleEmail}
                />
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

                <FormBtn sub_btn onClick={handleSignIn}>SignIn</FormBtn>
                <Or>Or</Or>
                <FormBtn>
                  <FcGoogle />
                  SignIn with Google
                </FormBtn>
                <OrtherWise>
                  <span onClick={() => Navigate("/Forgot-Password")}>
                    Forgot Password?
                  </span>
                </OrtherWise>
                <OrtherWise>
                  Don't have an Account
                  <span onClick={() => Navigate("/Sign-Up")}> Sign Up</span>
                </OrtherWise>
              </FormBody>
            </Form>
          </FormWrapper>
        </Mainbody>
      )}
    </>
  );
};

export default SignIn;
