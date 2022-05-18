import axios from "axios";



export function request(config){
    const instance=axios.create({
        baseURL:'http://pjclient.sclxzc.cn/api',

    })

    instance.interceptors.request.use(config=>{
        config.headers.Authorization='Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoieHhhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMSIsImx4emNfb3JnSWQiOiI1MSIsImx4emNfbWFhbmdlb3JnaWRzIjoiNTEiLCJleHAiOjE2NTI3ODQ2NzIsImlzcyI6InNjaG9vbHdpc2RvbSIsImF1ZCI6InNjaG9vbHdpc2RvbSJ9.uzLMnAyHoSvMLTNjM-i8skmKIxa9W1yszSAnxyfUhEU'
        return config
    },
        error => {
         return console.log(error)
        }
    )

    instance.interceptors.response.use(res=>{
        return res.data
    },
        error => {
            console.log(error)
        }
    )

    return instance(config)
}