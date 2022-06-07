import { USERLOGIN,USERLOGOUT } from "./actionTypes";

const initialState = {
    isloggedIn:false
};

export const userReducer = ( state = initialState,action) =>{
    switch(action.type){
        case USERLOGIN:
            return{
                
                ...state,
                
                isloggedIn:true
            };
            case USERLOGOUT:
                return{
                    ...state,
                    isloggedIn:false
                };
       
        default:
            return state;
    }
};