import styled from "styled-components";

export const MovieDetailsAddToPlaylistBtn = styled.button`
   width:180px;
   min-height: 60px;
   background-color:  #a8701d;
   font-size: 22px;
   color: black;
   border: none;
   outline: none;
   cursor: pointer;
   border-radius: 10px;
   transition: all 350ms ease-in;

   &:hover{
        background-color: #8d5a0d;
    }
`
export const MovieDetailsDesc = styled.div`
   width:100%;
   font-size: 24px;
   color: white;
`
export const MovieDetailsTitle = styled.div`
   width:100%;
   font-size: 40px;
   color: white;
`
export const DetailsMovieDetails = styled.div`
   width:48%;
   height: 80%;
   /* background: gainsboro; */
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
`
export const DetailsImg = styled.div`
   width:44%;
   height: 80%;
   /* background: gainsboro; */
   border-radius: 10px;
   /* display: flex;
   align-items: center;
   justify-content: center; */

   img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
   }
`
export const DetailsMainWrapperBody = styled.div`
   width: 95%;
   height:  90%;
   background: rgba(109, 104, 104, 0.6);
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 25px;
`
export const DetailsMainWrapper = styled.div`
   width: 100%;
   height:  89vh;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const DetailsMainBody = styled.div`
   width: 100%;
   height:  100vh;
   background-repeat: no-repeat;
   background-size: cover;
   background: #a8701d;
`