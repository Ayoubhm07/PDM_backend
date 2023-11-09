import express from express ; 
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';


const app= express();
const port= process.env.PORT || 9090
const db='velou';

mongoose.set('debug',true);
mongoose.Promise=global.Promise;

mongoose
    .connect('mongodb://localhost:27017/${velou}')
    .then(()=>{
        console.log(`Connected to ${velou}`);
    })
    .catch(err=>{
        console.log(err);
    });


app.use(express.json());

app.use('/post', postroutes);





