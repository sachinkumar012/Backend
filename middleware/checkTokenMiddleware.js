let myToken="12345";
let checkToken=(req,res,next)=>{
    console.log(req.query.token);
    // if token is right: http://localhost:3000/news?token=12345
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({
            status:0,
            "message":"Please fill the Token"
        })
    }
    // if token is not correct : http://localhost:3000/news?token=12347
     if(req.query.token!=myToken){
        return res.send({
            status:0,
            "message":"Please fill the Correct Token"
        })
    }
    next();   // after next it will go to another route
}

module.export={checkToken}