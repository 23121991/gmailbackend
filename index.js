const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes= require("./routes/authRoutes");
const dotenv =require("dotenv");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
dotenv.config();
const cors = require("cors");


mongoose.connect(process.env.DB_URL,
    {useNewUrlParser:true, useUnifiedTopology:true},
    ()=>{

        console.log("DB connected...!")
    })


app.use(cors());

app.use(cookieParser());

//middlewares
app.use(bodyParser.json());



//Routes
app.use("/api",authRoutes);






const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});






