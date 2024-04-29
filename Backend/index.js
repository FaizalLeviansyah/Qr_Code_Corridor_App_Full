import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import videosRoute from "./routes/videosRoute.js";
// import bodyParser from ('body-parser');
// import dotenv from ('dotenv');

// require('dotenv').config();

const app = express();

// dotenv.config({ path: './.env'})

//Parse Application/json
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(videosRoute)

app.listen(5000, ()=> console.log('Server Up & Running...'));