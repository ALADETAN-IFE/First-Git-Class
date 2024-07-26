import React, { useEffect,useState } from "react";
import { MdMovieCreation } from "react-icons/md";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useSelector } from 'react-redux'
import axios from "axios";

  const Header = () => {
  const PlayListDatas = useSelector((state)=> state.Playlist.PlaylistItems)
  const Navigate = useNavigate();
  const signOut = () => {
    Navigate("/")
    toast.success("You have successfully signed out");
  };
  const [userName, setuserName] = useState("UserName")
  const {userId} = useParams()

  const getUser = async () =>{
    const url = "https://classmovback.onrender.com/api"
    try {
      const res = await axios.get(`${url}/userdata/${userId}`)
      console.log(res)
        toast.success(res?.data?.message)
      setuserName(res?.data?.data?.userName)
    } catch (error) {
     console.log(error)
    }
  }
  useEffect(  () => {
    getUser()
 },[]);
  return (
    <HeaderMainBody>
      <HeaderMainBodyWrapper>
        <HeaderLogo>
          <Link to="/BountyMiex">BountyMiex</Link>
        </HeaderLogo>
        <HeaderUserMainInfo>
          <NavLink
            to="/BountyMiex/Playlist"
            className={({ isActive }) =>
              isActive ? "PlayListIcon Active" : "PlayListIcon NotActive"
            }
          >
            <PlaylistCount>{PlayListDatas.length}</PlaylistCount>
            <MdMovieCreation />
          </NavLink>
          <UserName> {userName}</UserName>
          <Logout onClick={signOut}>Logout</Logout>
        </HeaderUserMainInfo>
      </HeaderMainBodyWrapper>
    </HeaderMainBody>
  );
};

export default Header;

// const HeaderLogo = styled.div`
// `
const Logout = styled.button`
  width: max-content;
  height: max-content;
  color: red;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* border: none; */
  outline: none;
  padding: 9px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid transparent;
  transition: all 350ms ease-in;

  &:hover{
    border: 1px solid #a8701d;
    background: rgba(80, 79, 79, 0.219);
  }
`;
const UserName = styled.div`
  width: max-content;
  height: 100%;
  color: white;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding: 9px;
  margin-left: 4px;
`;

const PlaylistCount = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: -7px;
  background-color: white;
  color: #a8701d;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeaderUserMainInfo = styled.div`
  min-width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background:white; */
  gap: 18px;
`;

const HeaderLogo = styled.div`
  width: max-content;
  height: 100%;
  font-size: 35px;
  font-weight: 700;
  display: flex;
  align-items: center;
  
  a{
    color: #a8701d;
    text-decoration: none;
    transition: all 350ms ease-in;
    transform: scale(1);

    &:hover{
     transform: scale(1.05);
    }
  }
`;
const HeaderMainBodyWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  // background:
`;

const HeaderMainBody = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: center;
  background: #000;
  position: sticky;
  top: 0;
  z-index: 999;
  /* box-shadow: 0px 5px 5px rgba(179, 169, 169, 0.4); */
`;
