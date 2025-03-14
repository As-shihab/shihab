import axios from "axios";

// https://portfolio-t061.onrender.com/

export const http= axios.create({
    baseURL: `https://portfolio-t061.onrender.com/` ,
    headers: {
        'admintoken' : localStorage.getItem("admintoken") ? localStorage.getItem("admintoken") : null,
         'user-token' : localStorage.getItem("user-token")? localStorage.getItem('user-token') :  null,
         'Access-Control-Allow-Origin' :'*'
    }
})

export const path = `https://portfolio-backend-adal.onrender.com/api/`
// https://portfolio-backend-adal.onrender.com/api/   rander api
