import React from 'react'
import { DetailsMainBody, DetailsMainWrapper, DetailsMainWrapperBody,
  DetailsImg, DetailsMovieDetails, MovieDetailsTitle, MovieDetailsDesc,
  MovieDetailsAddToPlaylistBtn
 } from './DetailsStyle'
 import Header from '../../Components/Header/Header'
// import Bg2 from "../../assets/IMG/bg2.png"
import { useParams } from 'react-router-dom'
import data from '../../Data.json'
import { useDispatch } from 'react-redux'
import { addToPlaylist } from '../../Global/Redux-actions/PlaylistSlice'
const Details = () => {

  const {title} = useParams()
  // const title1 = generatePath(

  // )
  // console.log(title)
  const ArrayedData = Object.values(data)
  // console.log(ArrayedData)
  const exactMovie = ArrayedData.filter(data => data.title === title)
  // const exactMovie2 = data2.filter(data => data.Title === title)
  // console.log(exactMovie2)
  const filterexactMovie = exactMovie[0]
  // console.log(filterexactMovie)
  const AddToPlaylist = () => {
    dispatch(addToPlaylist(filterexactMovie))
  }
  const dispatch = useDispatch()
  return (
    <DetailsMainBody style={{backgroundImage: `url(${filterexactMovie?.backgroundImg})`}}>
      <Header/>
      <DetailsMainWrapper>
      <DetailsMainWrapperBody>
        <DetailsImg>
          <img src={filterexactMovie?.cardImg} alt={`${filterexactMovie?.title} image`} />
        </DetailsImg>
        <DetailsMovieDetails>
          <MovieDetailsTitle>{filterexactMovie?.title}</MovieDetailsTitle>
          <MovieDetailsDesc>
          {filterexactMovie?.description}
            </MovieDetailsDesc>
            <MovieDetailsAddToPlaylistBtn 
            // onClick={}
            onClick={AddToPlaylist}
            >Add to playlist</MovieDetailsAddToPlaylistBtn>
        </DetailsMovieDetails>
      </DetailsMainWrapperBody>
      </DetailsMainWrapper>
    </DetailsMainBody>
  )
}

export default Details