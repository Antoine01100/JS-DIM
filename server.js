//-----------------------------------------CONST
const express       = require("express")
const app           = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())

//-----------------------------------------CONNEXION BD
let MongoClient = require("mongodb").MongoClient;
const { json } = require("body-parser");
const client = new MongoClient("mongodb://localhost:27017", 
    { useNewUrlParser: true, useUnifiedTopology: true });

let db = null;
client.connect(err => {
    db = client.db("csgo")
})

//-----------------------------------------ROUTE STATIQUES
app.use("/css",express.static(__dirname + "/css"))
app.use("/js",express.static(__dirname + "/js"))
app.use("/images",express.static(__dirname + "/images"))

//-----------------------------------------ROUTE UNIQUE DE FRONT
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/html/index.html")
})

//-----------------------------------------ROUTE SERVICE (REST)
app.get("/list",(req,res) =>{
    db.collection("weapons").find({}).toArray((err,docs) =>{
        //console.log(docs)
        res.json(docs)
    })
})

app.get("/recherche/:name",(req,res) =>{
    db.collection("weapons").find({name: req.params.name}).toArray((err,docs) =>{
        console.log("docs :" +docs)

        res.json(docs)
    })
})

app.post("/add",(req,res) =>{
    let stuff = req.body
    db.collection("weapons").insertOne(stuff,(err,docs) =>{
        console.log("docs :" +docs)
        res.json(stuff)
    })
})

app.get("/suppr/:name",(req,res) =>{
    db.collection("weapons").deleteOne({name: req.params.name})
        //res.json(req)
        // try {
        //     nonExistentFunction();
        //   } catch (error) {
        //     console.error(error);
        //     // expected output: ReferenceError: nonExistentFunction is not defined
        //     // Note - error messages will vary depending on browser
        //   }
})

// app.get("/update/:name",(req,res) =>{
//     db.collection("weapons").findOneAndUpdate({name: req.params.name}).toArray((err,docs) =>{
//         name: req.name
//         type: req.type
//         price: req.price
//         max_player_speed : req.max_player_speed
//         penetration: req.penetration
//         damage: req.damage
//         range: req.range
//         recovery_time_crouch: req.recovery_time_crouch
//         recovery_time_stand: req.recovery_time_stand
//         bullets: req.bullets
//         spread: req.spread
//         inaccuracy_crouch: req.inaccuracy_crouch
//         inaccuracy_stand: req.inaccuracy_stand
//         inaccuracy_jump: req.inaccuracy_jump
//         inaccuracy_fire: req.inaccuracy_fire
//         inaccuracy_move: req.inaccuracy_move
//         inaccuracy_land: req.inaccuracy_land
//         recoil_angle: req.recoil_angle
//         recoil_angle_variance: req.recoil_angle_variance
//         recoil_magnitude: req.recoil_magnitude
//         recoil_magnitude_variance: req.recoil_magnitude_variance
//         full_auto: req.full_auto
//         armor_ratio: req.armor_ratio
//     })



//-----LOCALHOST:1327------
app.listen(1327)
