import * as ACTIONTYPE from "../../constants/action-type";
import * as STATUSTYPE from "../../constants/status-type";  
import * as GiphyManager from "../../actions-api/giphy-manager"

export const SearchGIF = (action, dispatch)=>{
    action.login_status = STATUSTYPE.QUERY_LOADING;
    new Promise((resolve, reject)=>{
        try{
            const result = GiphyManager.searchGIF(action.payload);
            resolve(result);
        }catch(err){
            reject(err);
        }
    }).then(response=>{
        action = {
            type : ACTIONTYPE.PIGGY_GIPHY_SELECTION_RESOLVED,
            login_status : STATUSTYPE.QUERY_RESOLVED,
            login_message : "Successfully GIF Extracted",
            
            gif: response.data.data.map(i => {
                return i.images.original.url
            })
        }
        dispatch(action);
    })
    .catch(error=>{
        action = {
            type : ACTIONTYPE.PIGGY_GIPHY_SELECTION_RESOLVED,
            login_status : STATUSTYPE.QUERY_ERROR,
            login_message : "Error in Quering to giphy.com"
        }
        dispatch(action);
    })
}


