export const options = {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 1000, // one hour
        secure: false, // must be false for localhost HTTP
        path: "/",
      };