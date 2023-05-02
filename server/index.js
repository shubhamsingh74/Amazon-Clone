console.log('Hello Shubham');

const express = require('express');
//this line is like import in flutter 

const PORT = 3000;

//intialise the express to app variable as const 
const app = express();

//  comment for creating api
app.listen(PORT, "0.0.0.0",  () => {
//    console.log('connected at port'+PORT);
     console.log(`connected at port ${PORT}`);
});