import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { HomePageMainBody,MovieListing, MovieListingWrapper,
 } from './HomePageStyle'
import Movie from '../../Components/Movie/Movie'
import data from '../../Data.json'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import data2 from '../../Data2.json'

const HomePage = () => {
  const ArrayedData = Object.values(data)
  // 
  // const [ArrayedData, setArrayedData] = useState({})
 
  return (
    <HomePageMainBody>
      <Header/>
      <MovieListing>
        <MovieListingWrapper>
          {
            ArrayedData.map((movie, index) => (
              <Movie
                key={index}
                datas={movie}
                index={index}
              />
            ))
          }
        </MovieListingWrapper>
      </MovieListing>
    </HomePageMainBody>
  )
}

export default HomePage