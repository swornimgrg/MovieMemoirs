require("dotenv").config();
const express = require('express')
const app= express()
const db = require("./db")
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//get movies
app.get('/api/movies',async(req,res)=>{
    try{
        const results = await db.query("SELECT * FROM movies ");
        res.status(200).json({
            status: "sucess",
            results:  results.rows.length,
            movies: results.rows,
                        
        })
    }
    catch(err){
        console.log(err);
    }
    
});

//get a movie
app.get('/api/movies/:name', async(req, res)=>{
    console.log(req.params.name)

    try{
        const results = await db.query(`SELECT name FROM movies where name= '${req.params.name}'`);
        console.log(results)
        res.status(200).json({
            status: "sucess",
            data:{
                name : results.rows
            }
        })
    }
    catch(err){
        console.log(err);
    }
})


app.listen(port,()=>{console.log(`listening on port ${port}`)})