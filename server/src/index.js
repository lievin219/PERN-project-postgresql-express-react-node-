const express=require('express')
const database=require('./data')
const cors=require('cors')
const pool = require('./data')
require("dotenv").config();
const app=express()
//middle ware services
app.use(cors())
app.use(express.json())
//routes down here!
//create a todo;
const porti=process.env.PORT

 app.post('/todos',async(req,res)=>{
     try{
    const {description}=req.body
    const newtodo=await database.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])

    res.json(newtodo.rows)
  
} 
catch(err){
     console.log(err)       

}
 })
 // my database:postgres://pern_project_user:86RDbnqs1slAj0nteg2XFqlhi6NmaT5R@dpg-cp3lmjnsc6pc73frfdlg-a/pern_project
// get all todo;
app.get("/get/all",async(req,res)=>{
      try{
         const alltodos=await pool.query("SELECT * FROM todo")
             res.status(200).json(alltodos.rows)
      }
      catch(err){
 res.json({err:` an error occuring is ${err}`})
      }
})


//get a todo;
app.get("/todo/:id",async(req,res)=>{
        try{
    let id=req.params.id
    const todoid=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id])
    
    res.json(todoid.rows)
        }  
        catch(err){
     res.json(err)
     console.log(err) 
        }
})

//update a todo;
app.put("/todos/:id",async(req,res)=>{
try{
 const id=req.params.id
 const description=req.body
 const updatetodo=await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 ",[description,id])
 res.json("todo updated!!")
}
catch(err){
    console.log(err)
}


})

//delete  todo;
app.delete("/delete/:id",async(req,res)=>{
   try {
    const id=req.params.id
         const deleteitem=pool.query("DELETE FROM todo WHERE todo_id=$1 ",[id])
         res.json('todo is deleted now')
    
   } catch (error) {
     res.json(error)
    
   }
})

app.listen(porti,()=>{
    console.log(` server has started   running on port 0f${porti}`)
})


//username:pern_app_erjf_user
//port:5432
//host:dpg-cp5m5uocmk4c73f4sphg-a
//password:0Rxs968yUFusEqjoJ3FEhv21ElLCDBf7
//database:pern_app_erjf
