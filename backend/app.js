require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
//import routes

//app
const app = express();
//Connecting to mongoDB Atlas 
/*mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}
    ).then(() => console.log("DB Connected"));
    mongoose.connection.on('error', err =>{
        console.log(`DB connection error:${err.message}`)
    }) */

//middlewares
app.use(morgan('dev'))
//routes middleware

//PORT
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is runnng on port ${port}`)
});