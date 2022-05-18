import {request} from "@/network/network";

export function doCard(doCardForm){
    return request({
        url:'/User/add',
        method:'post',
        data:doCardForm,

    })
}