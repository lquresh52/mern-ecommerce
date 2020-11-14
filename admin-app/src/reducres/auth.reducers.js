import { act } from "react-dom/test-utils";
import { authConstants } from "../actions/constants";

const initialState = {
    token: null,
    user: {
        email: "",
        firstName: "",
        lastName: "",
        picture: ''
    },
    authenticate: false,
    authenticating: false
};

export default (state = initialState, action) => {
    
    console.log(action);

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;

        case authConstants.LOGIN_SUCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
    }


    return state;
}