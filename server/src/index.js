const express=require('express')
const database=require('./data')
const cors=require('cors')
const pool = require('./data')
const app=express()
//middle ware services
app.use(cors())
app.use(express.json())
//routes down here!
//create a todo;

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

app.listen(5000,()=>{
    console.log(' server has started   running on port 0f 5000')
})

