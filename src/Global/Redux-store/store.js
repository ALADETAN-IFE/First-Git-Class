import { configureStore } from "@reduxjs/toolkit";
import PlaylistReducer from "../Redux-actions/PlaylistSlice";


export const store = configureStore({
  reducer: {
    Playlist:  PlaylistReducer,
  },
});