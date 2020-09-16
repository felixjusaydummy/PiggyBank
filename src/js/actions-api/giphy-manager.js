import axios from "axios";
import * as APIBACKEND from "../constants/api-backend"
import * as STATUSTYPE from "../constants/status-type"

async function queryGIF(param){

    let url = APIBACKEND.GIPHY_SELECT_AVATAR+"&q="+param.search;
    
    return axios({
        method: 'get',
        responseType: 'json',
        url: url
    })
    .then(response=>{
        return response;
    }).catch(error=>{
        return error;
    })

}

export async function searchGIF(param){
    const response = await queryGIF(param);
    return response;
}