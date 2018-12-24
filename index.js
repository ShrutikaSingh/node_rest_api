const express = require("express");
const bodyParser=require("body-parser");
const morgan = require("morgan");
const http = require ('http');

const hostname="localhost";
const port=4000;

const app = express();
app.use(bodyParser.json);
app.use(morgan('dev'));


const server=http.createServer(app);
server.listen(port,hostname,() =>{
  console.log(`listening to port: ${hostname}:${port}`);
});



app.all('/students',(req,res,next) =>{
  res.status = 200;
  res.setHeader =("Content-Type","text/plain");
  next();
});
app.get('/students',(req,res,next) =>{
  res.end("Displaying name of all students of bsc physics ");
});

app.post("/students",(req,res,next) => {
  res.send("names of the students are: "+ req.body.name + "and the roll of students are :" + req.body.roll );
});

app.use((req,res,next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader=('Content-Type','text/html');
  res.end('<html><head></head><body>this is express server</body></html>');
  res.send
});
