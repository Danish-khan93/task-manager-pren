import { checkTokenvalid } from "../features/auth/auth.service.js"

export const authGuard = (req,res,next)=>{
    const token  = req.cookies.accessToken
    
    const temp = checkTokenvalid(token)
    if(temp){
        next()
    }else{
        res.status(500)
    }
    


}