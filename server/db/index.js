const Pool = require("pg").Pool;

const pool = new Pool();
// const getName = (request, response)=>{
//     pool.query('SELECT name FROM movies').then((response)=> (JSON.stringify(response.rows))).catch(err=>console.log(err))
//   }

module.exports= {
  query: (text, params)=>pool.query(text, params),
};