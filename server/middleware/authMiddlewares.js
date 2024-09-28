const { auth, requiredScopes } = require('express-oauth2-jwt-bearer')
const axios = require("axios")


async function userAttatch(req,res,next){
    const token = req.headers['authorization'].split(" ")[1]
    const userInfo = await axios.get(`${process.env.ISSUERBASEURL}userinfo`,{
      headers:{Authorization:`Bearer ${token}`}
    }
    )
    req.user = userInfo.data
    next();
  }
  
  
  const jwtCheck = auth({
      audience: process.env.AUDIENCE,
      issuerBaseURL: process.env.ISSUERBASEURL,
      tokenSigningAlg: process.env.ALGORITHM
    });

    module.exports={
        jwtCheck,
        userAttatch
    }