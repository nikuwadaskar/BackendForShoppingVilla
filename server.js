const express= require('express');
const app=express();
require("dotenv").config()
var bodyParser = require('body-parser');
const port= 7000;
const cors = require('cors')

app.use(cors())
// database connection
// const db= require('./config/mongoose');

const cookieParser= require('cookie-parser');


//use the body
// app.use(express.urlencoded({extended:true}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//use the cookieparser
app.use(cookieParser());

//setup for layouts
// app.use(expressLayouts);
//extract all styles and scripts from layouts
// app.set("layout extractScripts", true);
// app.set("layout extractStyles", true);

//setup for view engine
// app.set('view engine', 'ejs');
// app.set('views','./views');

app.use("/",require('./routes'));
// app.get('/',(req,res)=>{
// return res.send("mnkk,k")
// })


app.listen(port,function(err){
    if(err){
        console.log("Error in running the server in the port :",port);
    }
    console.log("server is running on the port", port);
});