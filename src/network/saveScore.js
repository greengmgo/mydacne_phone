import {request} from "@/network/network";

export function getScoreList(data) {
    return request({
        url:'/TargetScore/List',
        method:'post',
        headers:{
            Authorization:'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoieHhhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMSIsImx4emNfb3JnSWQiOiI1MSIsImx4emNfbWFhbmdlb3JnaWRzIjoiNTEiLCJleHAiOjE2NTI2OTA3MTMsImlzcyI6InNjaG9vbHdpc2RvbSIsImF1ZCI6InNjaG9vbHdpc2RvbSJ9.0CiK_zdKekgnsz58VLpCyg6D6eItpYeTXUiGujj3cYA'
        },
        data
    })
}

export function saveScore(saveDaTa){
    return request({
        url:'/TargetScore/SaveScoreDetail',
        method:'post',
        headers:{
            Authorization:'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoieHhhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMSIsImx4emNfb3JnSWQiOiI1MSIsImx4emNfbWFhbmdlb3JnaWRzIjoiNTEiLCJleHAiOjE2NTI2OTA3MTMsImlzcyI6InNjaG9vbHdpc2RvbSIsImF1ZCI6InNjaG9vbHdpc2RvbSJ9.0CiK_zdKekgnsz58VLpCyg6D6eItpYeTXUiGujj3cYA'
        },
        data:saveDaTa
    })
}