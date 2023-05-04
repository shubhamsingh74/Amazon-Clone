//IMPORTS FROM PACKAGES
const express = require("express");//this line is like import in flutter
const mongoose = require("mongoose"); //database of mongodb

//IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth.js'); //import like dart of other screens like import './features/auth/screens/auth_screens.dart',


//all the INITIALIZATIONS 
const PORT = 3000;
const app = express();//intialise the express to app variable as const
const DB = "mongodb+srv://shubhamsingh:16May2002@cluster0.kqhuftx.mongodb.net/?retryWrites=true&w=majority";


//Middleware //CLIENT -> middleware -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);

//connections
mongoose.connect(DB).then(() => {
     console.log('connection successful');
}).catch(e => {
     console.log(e);
})


//  comment for creating api
app.listen(PORT,  () => {
  //    console.log('connected at port'+PORT);
  console.log(`connected at port ${PORT} `);
});
