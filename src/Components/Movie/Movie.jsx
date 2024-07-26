import React, { useState } from 'react'
import { MovieCard, ImageHolder, MovieTitle,
    MovieDesc, MovieInteraction, ReactionBtn
} from "../../Pages/Home/HomePageStyle"
// import mockImg from "../../assets/IMG/bg2.png"
import { FaStar, FaRegStar } from 'react-icons/fa'
import { FaRegBookmark} from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToPlaylist } from '../../Global/Redux-actions/PlaylistSlice';

const Movie = ({datas, index}) => {
    const [LikeCount, setLikeCount] = useState(0)
    const [RateCount, setRateCount] = useState(0)
    const [LikeIcon, setLikeIcon] = useState(false)
    const [RateIcon, setRateIcon] = useState(false)
    const Navigate = useNavigate();

    const handleDetailsClick = () => {
      Navigate(`/BountyMiex/Details/${datas.title}`)
    }
    const handleLike = () => {
        setLikeIcon(!LikeIcon)
        setLikeCount(LikeIcon ? LikeCount - 1 : LikeCount + 1)
    }

    const handleRate = () => {
        setRateIcon(!RateIcon)
        setRateCount(RateIcon? RateCount - 1 : RateCount + 1)
    }
    const dispatch = useDispatch()
    const AddToPlaylist = () => {
      dispatch(addToPlaylist(datas))
    }
  return (
    <MovieCard key={index}>
            <ImageHolder onClick={handleDetailsClick}>
              <img src={datas?.cardImg} alt={`${datas?.title} image`} />
            </ImageHolder>
            <MovieTitle>{datas?.title}</MovieTitle>
            <MovieDesc> {datas?.description} </MovieDesc>
               <MovieInteraction>
                <ReactionBtn>
                {
                    LikeIcon ? 
                    <AiFillLike size={32} className='pointer' onClick={handleLike} />
                    :
                  <AiOutlineLike size={32} className='pointer' onClick={handleLike} />
                  }
                  {LikeCount}
                </ReactionBtn>
                <FaRegBookmark size={24} className='pointer' onClick={AddToPlaylist}/>
                <ReactionBtn>
                {
                    RateIcon ? 
                    <FaStar size={28} className='pointer' onClick={handleRate}  />
                    :
                  <FaRegStar size={28} className='pointer' onClick={handleRate}  />
                  }
                  {RateCount}
                </ReactionBtn>
               </MovieInteraction>
    </MovieCard>
  )
}

export default Movie