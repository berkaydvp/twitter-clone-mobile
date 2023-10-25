import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../../../firebase-config'
import { collection, addDoc, query, where, getDocs, } from "firebase/firestore"; 
interface signupProps{
    email:string,
    password:string,
    name?:string,
    surname?:string,
    nickname?:string

}
const initialState = {
    user:{},
    isLoggedIn:false,
}

const usersCollectionRef = collection(db, "users")
export const signUp = createAsyncThunk('signUp', async function(props:signupProps) {
    const userCredential = await createUserWithEmailAndPassword(auth, props.email, props.password);
    const userJSON = userCredential.user.toJSON();
    try{
        await addDoc(usersCollectionRef, {
            name:props.name,
            surname:props.surname,
            email:props.email,
            nickname:props.nickname,
            
            uid:userJSON.uid
           })
    }catch(err){
        console.log(err)
    }

})
export const signIn = createAsyncThunk('signIn', async function(props:signupProps){
    const userCredential = await signInWithEmailAndPassword(auth, props.email, props.password)
    const userAuthed = userCredential.user.toJSON();
    const userRef = collection(db, "users");
    const q = query(userRef, where("uid", "==",userAuthed.uid));
    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs[0].data();
    console.log(user);
    return user
})



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login : (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        },
        logout: (state) => {
          state.user = {};
          state.isLoggedIn = false;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(signUp.fulfilled, ()=>{
        }
        ),
        builder.addCase(signIn.fulfilled,(state, action)=>{
            state.user= action.payload;
            state.isLoggedIn = true;
        })
    }
    
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer