const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    catgeory:String,
    releaseYear:Number
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData