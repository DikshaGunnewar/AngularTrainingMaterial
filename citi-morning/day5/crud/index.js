// configure modules
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");

const app = express();

// configure database ORM
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Friend = mongoose.model("Friend", Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : String,
    phone : String
}));

const url = "mongodb+srv://admin:5Y1Zlgd3VkONxhQ3@mycluster.6cccx.mongodb.net/CitiDB?retryWrites=true&w=majority";

mongoose.connect(url)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err));

// configure middlewares
app.use(cors());
app.use(express.json());

// configure routes CRUD
// CREATE | post
// READ | get
// READ BEFORE UPDATE | get 
// UPDATE | post | put
// DELETE | get | delete

// READ | get
app.get("/data",(req, res)=>{
    Friend.find((error, friends)=>{
        if(error){ console.log("Error ", error)}
        else{ res.send( friends )}
    })
    // res.send("Hello from express")
});

// CREATE | post
app.post("/data",(req, res)=>{
    let friend = new Friend(req.body);
    friend.save()
    .then(()=> res.send({ message : "Friend was added to database"}))
    .catch((err)=>console.log("Error ", err))
});


// READ BEFORE UPDATE | get 
app.get("/edit/:friendid",(req, res)=>{
    Friend.findById(req.params.friendid, (err, edit_friend)=>{
        if(err){ console.log("Error : ", err) }
        else{ res.send(edit_friend) }
    })

});

// UPDATE | post | put
app.post("/edit/:friendid", (req, res)=>{
    Friend.findById(req.params.friendid, (err, friend)=>{
        if(err){ console.log("Error : ", err)}
        else{
            friend.firstname = req.body.firstname;
            friend.lastname = req.body.lastname;
            friend.email = req.body.email;
            friend.phone = req.body.phone;
            friend.save()
            .then(dbres=> res.send(dbres))
            .catch(err=>console.log(err))
        }
    })
})


// DELETE | get | delete
app.delete("/delete/:friendid", (req, res)=>{
    // console.log(req.params.friendid);
    Friend.findByIdAndDelete(req.params.friendid,(err, friend)=>{
        if(err){ console.log("Error : ", err)}
        else{ res.send({ message : "Friend Deleted"})}
    })
    
})  

// configure webserver
app.listen(5050, "localhost", (err)=>{
    if(err){
        console.log("Error : ", err);
    }else{
        console.log("express server is now live on localhost:5050")
    }
})
