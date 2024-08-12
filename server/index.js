const express = require("express");
const app = express();
const pool = require("./db")
const cors = require("cors");
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
    try{

    }catch(err){

    }
})

app.get("/players", async (req, res) => {
    try{
        await fs.readFile('out.txt', (err, data) => {
            //console.log(data.toString());
            
            arr = JSON.parse(data.toString());
            console.log(arr);
            res.json(arr);
        });
    }catch(err){
        console.error(err.message);
    }
})

app.get("/players/:id", async (req, res) => {
    try{
        await fs.readFile('out.txt', (err, data) => {
            //console.log(data.toString());
            
            arr = JSON.parse(data.toString());
            /*
            const { id } = req.params;
            for(let i = 0; i < arr.length; i++){
                if(arr[i].)
            }
            */
            console.log(arr);
            res.json(arr);
        });
        
    }catch(err){

    }
})

app.put("/", async (req, res) => {
    try{

    }catch(err){

    }
});

app.delete("/", async (req, res) => {
    try{

    }catch(err){

    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000!");
});
