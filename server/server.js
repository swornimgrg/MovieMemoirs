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
        console.log("Database connected");
        
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

app.get('/api/search', async(req, res)=>{
   try{
    const { query } = req.query;

    const searchQuery = `SELECT * FROM movies WHERE name ILIKE '%${query}%'`;
    
    const searchResult = await db.query(searchQuery);

    res.json(searchResult);
    console.log(searchResult)
   }
   catch(error){
    console.error('Error during search', error);
    res.status(500).json({message: 'Internal server error'})
   }
});


app.listen(port,()=>{console.log(`listening on port ${port}`)})