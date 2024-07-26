import styled from "styled-components";

// export const PlaylistMainBody = styled.div`
//    width: 100%;
//    height:  max-content;
// `
export const RemovePlayListCard = styled.button`
   /* width:240px; */
   min-height: 50px;
   background-color:  #a8701d;
   font-size: 20px;
   color: black;
   border: none;
   outline: none;
   cursor: pointer;
   border-radius: 4px;
   padding-left: 10px;
   padding-right: 10px;
   transition: all 350ms ease-in;
   transform: scale(1);

   &:hover{
        transform: scale(1.05);
    }
  
`
export const PlayListCardRemover = styled.div`
   width: 100%;
   height:  max-content;
   display: flex;
   justify-content: flex-end;
   /* background: blanchedalmond; */
`

export const PlayListDesc = styled.div`
   width: 100%;
   height:  46px;
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
   overflow: hidden;
   font-size: 19px;
   /* background: blanchedalmond; */
`
export const PlayListTitle = styled.div`
   width: 100%;
   height:  max-content;
   font-size: 25px;
   color: black;
   /* background: blanchedalmond; */
`

export const PlayListTextsAndBtnHolder = styled.div`
   width: 60%;
   height:  100%;
   /* background: rgba(109, 104, 104, 0.5); */
   display: flex;
   flex-direction: column;
   gap: 25px;
   justify-content: space-between;
`
export const PlayListCardImgHolder = styled.div`
   width: 30%;
   height:  100%;
   border-radius: 6px;
  /* background: rgba(109, 104, 104, 0.5); */

  img{
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  
`
export const PlayListCard = styled.div`
   width: 100%;
   height:  250px;
   padding: 10px;
   border-radius: 6px;
   /* background: #8d5a0d;  */
   /* background: #fff;  */
   background: rgb(179, 169, 169); 
   display: flex;
   justify-content: space-between;
   gap: 25px;
   padding: 15px;
`
export const ClearPlayList = styled.button`
   width:180px;
   min-height: 60px;
   background-color:  #a8701d;
   font-size: 22px;
   color: black;
   border: none;
   outline: none;
   cursor: pointer;
   border-radius: 4px;
   transition: all 350ms ease-in;
   transform: scale(1);

   &:hover{
        transform: scale(1.05);
    }
  
`

export const PlaylistBodyWrapper = styled.div`
  width: 85%;
  height:  90%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
  padding-top: 25px;
`

export const PlaylistBody = styled.div`
   width: 100%;
   height:  max-content;
   display: flex;
   align-items: center;
   justify-content: center;
`
   
   export const PlaylistMainBody = styled.div`
   width: 100%;
   min-height:  100vh;
   /* background: #000;  */
   background: #8d5a0d;
`