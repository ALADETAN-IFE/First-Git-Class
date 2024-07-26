import React from 'react'
import { PlayListCard, PlayListCardImgHolder, PlayListTextsAndBtnHolder, PlayListTitle,
    PlayListDesc, PlayListCardRemover, RemovePlayListCard
  } from './PlaylistStyle'
import { useDispatch } from 'react-redux'
import { removeFromPlaylist } from '../../Global/Redux-actions/PlaylistSlice'

const PlaylistCard = ({PlayList,index}) => {
  const dispatch = useDispatch()
  const RemoveFromPlaylist = () => {
    dispatch(removeFromPlaylist(index))
  }
  return (
    <PlayListCard>
    <PlayListCardImgHolder>
      <img src={PlayList?.cardImg} alt={PlayList?.title} />
    </PlayListCardImgHolder>
    <PlayListTextsAndBtnHolder>
      <PlayListTitle> {PlayList?.title}</PlayListTitle>
      <PlayListDesc> {PlayList?.description}</PlayListDesc>
         <PlayListCardRemover>
          <RemovePlayListCard onClick={RemoveFromPlaylist}>
            Remove from playlist
          </RemovePlayListCard>
         </PlayListCardRemover>
    </PlayListTextsAndBtnHolder>
    </PlayListCard>
  )
}

export default PlaylistCard