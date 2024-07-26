import React, { useEffect, useState } from "react";
import {
  Mainbody,
  Header,
  FormWrapper,
  Form,
  FormHeader,
  FormBody,
  Input,
  FormBtn,
  OrtherWise,
} from "./AuthStyle";
import Loading from "../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [Loader, setLoader] = useState(true)
  // const [Loader, setLoader] = useState(false);
  const [Email, setEmail] = useState();
  // console.log(PasswordErrorCheck)

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email
    if (newEmail.trim() === "") {
      toast.error("Email is required");
    }
  };

  const Navigate = useNavigate();
  const load = () => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

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
            <Form style={{ height: "45%" }}>
              <FormHeader>Forgot Password</FormHeader>
              <FormBody>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={handleEmail}
                />
                <FormBtn sub_btn>Reset Password</FormBtn>
                <OrtherWise left>
                  Don't have an Account{" "}
                  <span onClick={() => Navigate("/Sign-Up")}> Sign Up</span>{" "}
                </OrtherWise>
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

export default ForgotPassword;
