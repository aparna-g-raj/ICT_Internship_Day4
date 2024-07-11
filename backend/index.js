const express=require('express');
const app=new express();
const PORT=4000;
const movieModel=require('./model/movieData');
require('./connection');
//to fetch the movie data
app.get('/movies',async(req,res)=>{
    try{
        const data= await movieModel.find();  //find used to fetch all data
        res.send(data)
    }catch (error){
        console.log(error)
    }
})

//server activate
app.listen(PORT,()=>{
    console.log("server is running on Port 4000")
})