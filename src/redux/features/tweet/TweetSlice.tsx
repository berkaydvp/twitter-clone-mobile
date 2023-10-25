import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {auth, db} from '../../../../firebase-config'
import { collection, addDoc, query, where, getDocs, Timestamp, getDocFromCache, orderBy, } from "firebase/firestore"; 
import { userSlice } from "../user/UserSlice";

interface tweetProps{
    uid:string,
    name:string,
    surname:string,
    nickName:string,
    context:string,
    createdAt:Timestamp,
    like:string,
    reply:string,
    repost:string,
    view:string
}

const initialState = {
    tweets:{

    },
    userTweets:{

    }
}
const TweetCollectionRef = collection(db, "tweets")
export const postTweet = createAsyncThunk('postTweet', async function(props:tweetProps){
try {
await addDoc(TweetCollectionRef, {
    uid : props.uid,
    nickName:props.nickName,
    name:props.name,
    surname:props.surname,
    context:props.context,
    like:props.like,
    createdAt:props.createdAt,
    reply:props.reply,
    repost:props.repost,
    view:props.view,
  });
} catch (e) {
  console.error("Error adding document: ", e);
}
})

export const getTweets = createAsyncThunk('getTweets', async function(){
    let tweetsFromDatabase =[];
    try {
        const doc = (await getDocs(TweetCollectionRef)).docs
      
        doc.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tweetsFromDatabase = [...tweetsFromDatabase, doc.data()];
      })
      tweetsFromDatabase.sort(function(x, y){
        return x.createdAt - y.createdAt;
    });
    }
     catch (e) {
        console.log("Error getting cached document:", e);
      }
    return tweetsFromDatabase.reverse();
})


export const getUserTweets = createAsyncThunk('getUserTweets', async function(uid:string){
  const q = query(collection(db, "tweets"), where("uid", "==",uid));
  let userTweetsFromDatabase =[];
  try {
      const doc = await getDocs(q);
    
      doc.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          userTweetsFromDatabase = [...userTweetsFromDatabase, doc.data()];
    })
    userTweetsFromDatabase.sort(function(x, y){
      return x.createdAt - y.createdAt;
  });
    console.log(userTweetsFromDatabase);
  }
   catch (e) {
      console.log("Error getting cached document:", e);
    }
  return userTweetsFromDatabase.reverse();
})


export const tweetSlice = createSlice({
    name:"tweet",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(postTweet.fulfilled,()=>{
        }
        ),
        builder.addCase(getTweets.fulfilled,(state, action)=>{
            state.tweets = action.payload
        }
        ),
        builder.addCase(getUserTweets.fulfilled,(state, action)=>{
          state.userTweets = action.payload
      }
      )
    }
        
})

export default tweetSlice.reducer