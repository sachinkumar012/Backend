let express=require('express');
let app=express();
app.use(express.json()); // firstly it will run before all app program

/*
let checkToken=(req,res,next)=>{
    console.log("Welcome Middleware concept");
    next();   // after next it will go to another route
}

app.use(checkToken);   // work as middleware that will check the correct token so that it will go to next

app.get('/news',(req,res)=>{
    res.send({
        status:1,
        "message":"News API",
    })
})

app.listen(3000);

*/

/*

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

app.use(checkToken);   // work as middleware that will check the correct token so that it will go to next

app.get('/news',(req,res)=>{
    res.send({
        status:1,
        "message":"News API",
    })
})

app.listen(3000);

*/
let myToken = "12345";
let myPass = "1234";

// Middleware for token check
let checkToken = (req, res, next) => {
    if (!req.query.token) {
        return res.send({
            status: 0,
            message: "Please fill the Token"
        });
    }
    if (req.query.token !== myToken) {
        return res.send({
            status: 0,
            message: "Please fill the Correct Token"
        });
    }
    next();
};

app.use(checkToken);

// Middleware for password check
app.use((req, res, next) => {
    if (!req.query.password) {
        return res.send({
            status: 0,
            message: "Please fill the Password"
        });
    }
    if (req.query.password !== myPass) {
        return res.send({
            status: 0,
            message: "Please fill the Correct Password"
        });
    }
    next();
});

app.get('/news',checkToken, (req, res) => {
    res.send({
        status: 1,
        message: "This is News API",
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
