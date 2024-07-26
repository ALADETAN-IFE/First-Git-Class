import { createSlice } from "@reduxjs/toolkit";

const lo1 = (params) => {
    localStorage.setItem("tok",params || "" ) 
} 

const lo = localStorage.getItem("tok")


const initialState = {
    PlaylistItems: [

    ], 
    added : false,
    token: lo
}

export const PlaylistSlice = createSlice({
    name: "Playlist",
    initialState,
    reducers: {
        addToPlaylist: (state, {payload}) => {
            const checkItemTitle = state.PlaylistItems.findIndex((e)=> e.title == payload.title)
            if(checkItemTitle === -1){
                state.PlaylistItems = [payload, ...state.PlaylistItems]; 
            } 
            else{
                state.PlaylistItems = state.PlaylistItems 
           } 
        },
        removeFromPlaylist: (state, {payload}) => {
           const remanant = state.PlaylistItems.filter((e, i)=> i !== payload)
            state.PlaylistItems = remanant;
        },
        clearPlaylist: (state) => {
            state.PlaylistItems = []
        },

        addToken: (state, {payload}) => {
            state.token = payload
            lo1(payload)
        },
    }
});





export const {addToken, addToPlaylist, removeFromPlaylist, clearPlaylist} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;

