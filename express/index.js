let express = require("express");

let app = express();

app.use(express.json());

/* get method to send and receive data*/
app.get("/", (req, res) => {
  res.send({
    // status:1,
    message: "Home Page API",
  });
});

app.get("/home", (req, res) => {
  res.send({
    message: "This is home page",
  });
});

/* post method to send and receive data securly
post used when you will get the data from the frontend or client
*/
/*
app.post("/login",(req,res)=>{
    res.send({
        status:1,
        message:"This is login page"
    })
})

app.listen("3000");
*/

/*
app.post("/login",(req,res)=>{
    console.log(req);
    res.send({
        status:1,
        message:"This is login page"
    })
})

app.listen("3000");
*/

/*
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    status: 1,
    message: "This is login page",
  });
});

app.listen("3000");
*/

/*
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({status: 1,message: "This is login page",data:req.body
  });
});

app.listen("3000");
*/

// Query data
/*
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    status: 1,
    message: "This is login page",
    bodyData:req.body,
    queryData:req.query
  });
});

app.listen("3000");
*/

//PARAMS

app.get("/news/:id", (req, res) => {    // this is dynamic param this will run on any id
  res.send({
    message: "This is News page",
  });
});

app.listen(3000);

/*
app.get("/news/:id", (req, res) => {    // this is dynamic param this will run on any id
  let currentId=req.params.id           // this will method to print params id
  res.send({
    message: "This is News page" + currentId
  });
});

app.listen(3000);
*/



app.post('/login',(req,res)=>{
  console.log(req.body);
  res.status(200).json({    // we can also get JSON using 200 status 
    status:1,
    'message':'By 200 Json',
    bodyData:req.body,
    queryData:req.query,
  })
})