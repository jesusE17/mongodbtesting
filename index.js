var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

const uri = "mongodb+srv://JesusE_Dom:bacon141253@cluster0.4rxfe.mongodb.net/<dbname>?retryWrites=true&w=majority"

let db;

MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client)=>{
  if (err) throw err;

  console.log("Mongo Connected ");

  db = client.db('SuperHeros');
})
app.post('/addSuperHeros'), (req,res) => {
    db.collection('SuperHeros').insertOne({
        name:"",
        content:""
    }), (err,result)=>{
        if(err) throw err;
        res.send(result)
    }
}
app.get('/retrieveSuperHeros'), (req,res) => {
    db.collection('SuperHeros').find({
        name:"",
        content:""
    }), (err,result)=>{
        if(err) throw err;
        res.send(result)
    }
}
app.get('/retrieveSuperHerosbyid'), (req,res) => {
    db.collection('SuperHeros').findOne({
        id:""
    }), (err,result)=>{
        if(err) throw err;
        res.send(result)
    }
}





var port = process.env.Port || 3000;
app.listen(port, ()=>{
    console.log('listing on port' , port)
})

