import styled , { keyframes } from "styled-components";
import Bg2 from "../assets/IMG/bg2.png"

// export const Mainbody = styled.div`

// `
export const PassInfo = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    gap: 4px;

`
export const OrtherWise = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content:  ${({left})=> left ? "flex-start": "flex-end"};
    gap: 4px;
    font-weight: 500;
    span{
        cursor: pointer;
        transition: all 350ms ease-out;

        &:hover{
            text-decoration: underline ;
        }
    }
`
export const Or = styled.div`
    width: 100%;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

`
export const FormBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 18px;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${({sub_btn})=> sub_btn ? "#a8701d": "#6d6868"};
    cursor: pointer;
    transition: all 350ms ease-in;

    &:hover{
        background-color: ${({sub_btn})=> sub_btn ? "#8d5a0d": "#524e4e"};
    }

`
export const InputPassworrdDiv = styled.div`
    width: 100%;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: aliceblue; */
    background: rgba(109, 104, 104);


    .eye {
        width: 10%;
        text-align: center;
        cursor: pointer;
    }
`
export const Input = styled.input`
    width: ${({pass})=> pass ? " 90%": "100%"};
    height: 40px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 10px;
    background: rgba(109, 104, 104);

    &::placeholder{
        color: black;
    }

`

export const FormBody = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 14px;

`
export const FormHeader = styled.div`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;

    /* background-color: bisque; */
`
const FormShow = keyframes`
      from{
            display: none;
        }
        to{
            display: flex;

        }
`
export const Form = styled.div`
    min-width: ${({auth})=> auth ? "320px": "320px"};
    width:  ${({auth})=> auth ? "450px": "400px"};
    height: ${({auth})=> auth ? "75%": "66%"};
    background-color:  rgba(88, 81, 81, 0.603);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 350ms ease-in;
    gap: 14px;
    animation-name: ${FormShow};
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-delay: 2s;
`
export const FormWrapper = styled.section`
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Header = styled.section`
    width: 100%;
    height: 8vh;
    /* background-color: ghostwhite; */
    font-size: 35px;
    font-weight: 700;
    color: #a8701d;
    display: flex;
    align-items: center;
    padding:20px;
`
export const Mainbody = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    background: url(${Bg2});
    background-repeat: no-repeat;
    background-size: cover;
`

// useEffect(() => {
//     document.title = 'BountyMiex - ForgotPassword';
//   }, []);