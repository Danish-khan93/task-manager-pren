// A controller is a function or module that handles incoming HTTP requests,
// interacts with services or models, and sends back the response to the client.
// HTTP request = client asking server to do something
// Main parts: method, URL, headers, body
// Express receives it as req object in the controller

import { passHash } from "./auth.service.js"

export const registerUser = (req,res)=>{
const {firstName,lastName,email,password} = req.body
// here now pass hash service call 
 passHash(password)
}