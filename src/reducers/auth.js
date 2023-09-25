import {createSlice} from "@reduxjs/toolkit";
import {storeApi} from "./api";

 //session storage key
const CREDENTIALS = "credentials";

const authApi = storeApi.injectEndpoints({
    endpoints: (builder)=>({
        me: builder.query({
            query:()=> "auth/me"
        }),
        login: builder.mutation({
            query: (cred)=>({
                url:"auth/login",
                method: "POST",
                body: cred
            })
        }),
        register: builder.mutation({
            query: (cred)=>({
                url:"auth/register",
                method: "POST",
                body: cred
            })
        }),
        logout: builder.mutation({
            queryFn: ()=>({data:{}})
        })
    })
})

function storeToken(state, {payload}){
    console.log(state)
    state.credentials = {token: payload.token, seller: {...payload.seller}};
    window.sessionStorage.setItem(
        CREDENTIALS,
        JSON.stringify({
            token: payload.token,
            seller: {...payload.seller}
        })
    )
}


const authSlice = createSlice({
    name: "auth",
    initialState: {
        credentials : JSON.parse(window.sessionStorage.getItem(CREDENTIALS)) || {
            token:"",
            seller: {sellerId:null}
        }
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addMatcher(storeApi.endpoints.login.matchFulfilled, storeToken);
        builder.addMatcher(storeApi.endpoints.register.matchFulfilled, storeToken);
        builder.addMatcher(storeApi.endpoints.logout.matchFulfilled, (state)=>{
            console.log("logout")
            state.credentials = {
                token:"",
                seller: {sellerId:null}
            };
            window.sessionStorage.removeItem(CREDENTIALS)
        });
    }
})

export default  authSlice.reducer;

export const {
    useMeQuery,
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation
} = authApi