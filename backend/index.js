const express = require('express');
const {Pool} = require('pg');
const bcrypt =require("bcrypt")
const jwt=require("jsonwebtoken");
const cors = require('cors');
const app=express()
app.use(express.json())
app.use(cors())
const secretkey="guru"
// db connection 
const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"guru",
    port:5432,
})

pool.connect()
.then((client)=>{
    console.log("database connected");
    client.release()
})
.catch((error)=>{
    console.log("database connection error",error);
    
})
const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, secretkey, {
      expiresIn: "7d",
    });
  };

// table creation 
app.get("/table",async(req,res)=>{


    const loginUserTable = `
    CREATE TABLE IF NOT EXISTS Userlogin (
        id SERIAL PRIMARY KEY,
        bussinessname VARCHAR(255),
        username VARCHAR(255),
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_At TIMESTAMP DEFAULT NOW(),
        updated_At TIMESTAMP DEFAULT NOW()
    )
    `
try{
    await pool.query(loginUserTable)
    console.log("table created successfully");
    const result = await pool.query('SELECT * FROM Userlogin');
    const data = result.rows;
    res.status(200).send({message:'Table "courses" and "assignments" created successfully',data:data})
}catch(error){
console.log("error creating table",error);
res.status(400).send({message:"Table creation error"})
}
})
// validation user
const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 20;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      specialCharRegex.test(password)
    );
  };
// User SignUp
app.post("/signup", async (req, res) => {
    const { email, username, password } = req.body;
    console.log(req.body)
    if(!validatePassword(password)){
        return res.status(400).send({message:"Password must be 8-20 characters long and include a special character"})
    }
    try {
      const result = await pool.query(
        `SELECT * FROM Userlogin WHERE email=$1`,[email]
      )
const existuser=result.rows[0]
      if (existuser) {
        return res.status(400).send({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query(`INSERT INTO Userlogin(email,username,password) VALUES($1,$2,$3)`,[email,username,hashedPassword])
      res.status(201).send({ message: "user registered Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" ,error});
    }
  });
  
  //login
  
  app.post("/Userlogin", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    try {
      const result = await pool.query(
        `SELECT * FROM Userlogin WHERE email=$1`,[email]
      )
      const user =result.rows[0]
      if (!user) {
        return res.status(400).send({ message: "user not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Invalid password" });
      }
      const token = generateToken(user);
      res.status(200).send({ token: token, message: "user logged successfully" });
    } catch (error) {
      console.log("Login error ", error);
      res.status(500).send({ message: "Error logging user" });
    }
  });
 // businessman login 
 app.post("/businessmanLogin",async(req,res)=>{
    const {email,password,username}=req.body
    try{

      const result = await pool.query(
        `SELECT * FROM Userlogin WHERE email=$1`,[email]
      )   
      const businessman=result.rows[0]
      if(!businessman){
        return res.status(400).send({message:"user not found"})
    }
    if(businessman.username!==username){
        return res.status(400).send({message:"invalid username"})
    }
    const isMatch=await bcrypt.compare(password,businessman.password)
    if(isMatch){
        const token=generateToken(businessman)
    
    return res.status(200).send({token:token,message:"User logged successfully"})
    }
    return res.status(400).send({ message: "Invalid password" });
    }
    catch(error){
        res.status(400).send({message:"businessman Login error",error})
    }
 })


app.listen(8000,()=>{
    console.log("server is running at http://localhost:8000");
    
})