let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// absolutePath = __dirname + "/views/index.html";
// absolutePathAssetsFolder = __dirname + "/public";

// Serve an HTML file
// app.get("/", (req, res) => {
//   res.sendFile(absolutePath);
// });

// Serve static assets
// app.use("/public", express.static(absolutePathAssetsFolder));

// Serve JSON on a Specific Route
// const mySecret = process.env['MESSAGE_STYLE'];

// let response = "Hello json";
// app.get('/json', (req, res) => {
//   if (mySecret === "uppercase") {
//       res.json({"message": response.toUpperCase()});
//   } else {
//     res.json({"message": response});
//   }
// });

// Implement a Root-Level Request Logger Middleware
// app.use('/', (req,res,next) =>{
//   console.log(req.method, req.path, '-', req.ip);
//   next();
// });

// Chain Middleware to Create a Time Server
// app.get('/now', (req, res, next) => {
//   req.time = new Date().toString();
//   console.log(req.time);
//   next();
// },(req, res) => {
//   res.send({time: req.time});
// });

//Get Route Parameter Input from the Client
// app.get('/:word/echo', (req, res, next) => {
//   const { word } = req.params;
//   res.json({echo: word});
//   next();
// });

// Get Query Parameter Input from the Client
// app.route('/name').get((req, res) => {
//   let {first: firstname, last: lastname} = req.query;
//   let jsonObj = {name: firstname + ' ' + lastname};
//   res.send(jsonObj);
// }).post();

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Get Data from POST Requests
app.post('/name', (req, res) => {
  let {first: firstname, last: lastname} = req.body;
  let jsonObj = {name: firstname + ' ' + lastname};
  console.log(jsonObj);
  res.send(jsonObj);
});
















 module.exports = app;
