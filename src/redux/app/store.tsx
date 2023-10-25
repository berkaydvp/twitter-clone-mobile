import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/user/UserSlice";
import  uiReducer  from "../features/user/UiSlice";
import tweetReducer from "../features/tweet/TweetSlice";


export const store = configureStore({
    reducer:{
        user: userReducer,
        ui: uiReducer,
        tweet:tweetReducer
    }
})