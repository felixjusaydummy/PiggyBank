import * as ACTIONTYPE from "../constants/action-type";
import * as SIGNIN from "./middlewares/signin-middleware"
import * as USERACCOUNT from "./middlewares/user-account-middleware"
import * as GIFMANAGER from "./middlewares/giphy-middleware"

export const  middleware = ({dispatch}) => next => action => {
    // console.log("enter middleware");

    if(action.type === ACTIONTYPE.VIEW_REDIRECT_HOME ){
        SIGNIN.SignIn(action, dispatch)
        
    }else if(action.type === ACTIONTYPE.USER_INITIALIZE_ACCOUNT_DETAILS ){
        USERACCOUNT.GetUserAccount(action, dispatch)
    }else if(action.type === ACTIONTYPE.PIGGY_GIPHY_SELECTION_QUERY ){
        GIFMANAGER.SearchGIF(action, dispatch)
    }
    
    next(action);
 }


