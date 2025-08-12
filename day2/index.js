
let http=require('http'); // i use require - in package.json i use type=commonjs

// creating server using http.createServer having two call_back function as request and response
let server=http.createServer((req, res)=>{
    res.end("Welcome to client and server");
    // res.end() is used to end the response and send data to the client.
})

server.listen(3000);  // It will run on the browser on http://localhost:3000



/*
let http=require('http'); // i use require - in package.json i use type=commonjs

// creating server using http.createServer having two call_back function as request and response
let server=http.createServer((req, res)=>{
    if(req.url=="/news"){ // http://localhost:3000/news
        res.end("It runs the news url");
    }
    if(req.url=="/about"){ //http://localhost:3000/about
        res.end("It run about url page");
    }
    if(req.url=="/course"){ //http://localhost:3000/course
        res.end("It run course url");
    }
    if(req.url=="/"){
        res.end("Welcome to client and server");  // if my url is root url(/) then it will run on http://localhost:3000
    }
    // res.end() is used to end the response and send data to the client.
})

server.listen(3000);  // It will run on the browser on http://localhost:3000

*/



/*

let http=require('http'); // i use require - in package.json i use type=commonjs

// creating server using http.createServer having two call_back function as request and response
let server=http.createServer((req, res)=>{
    if(req.url=="/news"){ // http://localhost:3000/news
        let obj = {
            status: 1,
            data: [
                {
                    newsTitle: 'The Hindu',
                    newsDes: 'Current Affairs for UPSC'
                },
                {
                    newsTitle: 'Hindustan Times',
                    newsDes: 'Local and Sports News'
                }
            ]
        };
        // res.end(obj);   // it will create an error so used this
        res.end(JSON.stringify(obj));
    }

    if(req.url=="/about"){ //http://localhost:3000/about
        res.end("It run about url page");
    }
    if(req.url=="/course"){ //http://localhost:3000/course
        res.end("It run course url");
    }
    if(req.url=="/"){
        res.end("Welcome to client and server");  // if my url is root url(/) then it will run on http://localhost:3000
    }
    // res.end() is used to end the response and send data to the client.
})

server.listen(3000);  // It will run on the browser on http://localhost:3000
*/