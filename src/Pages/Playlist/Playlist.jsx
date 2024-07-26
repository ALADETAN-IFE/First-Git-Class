import React from 'react'
import Header from '../../Components/Header/Header'
import { PlaylistMainBody, PlaylistBody, PlaylistBodyWrapper, ClearPlayList,
  
} from './PlaylistStyle'
import { useDispatch, useSelector } from 'react-redux'
import { clearPlaylist } from '../../Global/Redux-actions/PlaylistSlice'
import PlaylistCard from './PlaylistCard'

const Playlist = () => {
  const PlayListDatas1 = useSelector((state)=> state.Playlist.PlaylistItems)
  const dispatch = useDispatch()
  const ClearPlaylist = () => {
    dispatch(clearPlaylist())
  }
  return (
    <PlaylistMainBody>
      <Header/>
      <PlaylistBody>
        <PlaylistBodyWrapper>
          <ClearPlayList 
          onClick={ClearPlaylist}
          > Clear PlayList </ClearPlayList>
          {PlayListDatas1.length}
          {
            PlayListDatas1?.map((PlayList, index)=> (
              <PlaylistCard  key={index} PlayList={PlayList} index={index}/>

            ))
          }
        </PlaylistBodyWrapper>
      </PlaylistBody>
    </PlaylistMainBody>
  )
}

export default Playlist