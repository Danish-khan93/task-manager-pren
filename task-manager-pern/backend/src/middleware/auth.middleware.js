import { checkTokenvalid } from "../features/auth/auth.service.js";
import { ErrorResponse } from "../utils/error.js";
export const authGuard = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    console.log(token,"token");
    
    if (!token) {
      return res.status(401).json(new ErrorResponse(401, "Login required"));
    }
    const user = await checkTokenvalid(token);

    if (!user) {
      return res.status(401).json(new ErrorResponse(401, "Invalid or expired token"));
    }
    req.user = user
    return next();
  } catch (error) {
    return res.status(401).json(new ErrorResponse(401, "Unauthorized User"));
  }
};
