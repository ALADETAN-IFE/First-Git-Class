import styled from "styled-components";

// export const HomePageMainBody = styled.div`
//    width: 100%;
//    height:  max-content;
// `

export const ReactionBtn = styled.div`
   width: max-content;
   height:  max-content;
   display: flex;
   gap: 5px;
   align-items: center;
   text-align: center;
   font-size: 22px;
`

export const MovieInteraction = styled.div`
   width: 100%;
   height: 10%;
   display: flex;
   align-items: center;
   // text-align: center;
   gap: 10px;

`

export const MovieDesc = styled.div`
   width: 100%;
   height:  19%;
   // background-color: aliceblue;
   /* white-space: nowrap; */
   /* text-overflow: ellipsis; */
   display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
   font-size: 19px;

`

export const MovieTitle = styled.div`
   width: 100%;
   height:  max-content;
   font-size: 25px;
`

export const ImageHolder = styled.div`
   width: 100%;
   height:  50%;
   background-color: aliceblue;
   border-top-right-radius:10px;
   border-top-left-radius: 10px;
   cursor: pointer;
   // display: flex;
   // align-items: center;
   // justify-content: center;
   overflow: hidden;

   
   img{
      width: 100%;
      height:  100%;
      border-top-right-radius:10px;
      border-top-left-radius: 10px;
      cursor: pointer;
      transform: scale(1);
      transition: all 800ms ease-in-out;
      

      &:hover{
         transform: scale(1.06);
      }
   }
`
export const MovieCard = styled.div`
   width: 28%;
   height:  350px;
   display: flex;
   flex-direction: column;
   gap: 10px;
   /* background: #a8701d; */
   background:rgb(179, 169, 169);
   border-radius: 10px;
   padding: 5px;
`

export const MovieListingWrapper = styled.div`
   width: 90%;
   height:  max-content;
   padding: 10px;
   padding-top: 50px;
   display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  /* background: #9b3a3a; */
`
export const MovieListing = styled.div`
   width: 100%;
   height:  max-content;
   display: flex;
   justify-content: center;
   background: #8d5a0d;
`

export const HomePageMainBody = styled.div`
   width: 100%;
   height:  max-content;
`