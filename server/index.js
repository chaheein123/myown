// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());


// Postgresql
const { Pool } = require("pg");
const keys = require("./keys");

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  // host: "postgres",
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS people (name VARCHAR(255), age INT)")
    .catch((err) => console.error(err));
});


// Say hello
app.get("/hello", (req, res) => {
  res.send("Hello world!!!")
});


// Express route handlers
app.get("/getpostgresqlpeople", async (req, res) => {
  const values = await pgClient.query("SELECT * from people");
  console.log(values.rows)
});

app.post("/addpostgresqlpeople", async (req, res) => {
  console.log(req.body)

  person_name = req.body.name
  person_age = req.body.age

  pgClient.query("INSERT INTO people(name, age) VALUES($1, $2)", [person_name, person_age]);

})


// const redis = require("redis");

// const redisClient = redis.createClient({
//   host: keys.redisHost,
//   port: keys.redisPort,
//   retry_strategy: () => 1000
// })

// const redisPublisher = redisClient.duplicate();

// app.get("/getredispeople", async (req, res) => {

//   // const infos = req.body.

//   // console.log(req.body)

//   person_name = req.body.name
//   person_age = req.body.age

//   console.log("Getting redis people ")
//   // pgClient.query("INSERT INTO people(name, age) VALUES($1, $2)", [person_name, person_age]);

//   redisClient.hgetall("abc", (err, values) => {
//     console.log(values)
//     console.log(err)
//     res.send(values)
//   })
// })


// app.post("/addredispeople", async (req, res) => {

//   // const infos = req.body.

//   console.log(req.body)

//   person_name = req.body.name
//   person_age = req.body.age

//   console.log("This is backend tallking..... The persons age ")
//   console.log(person_name)
//   console.log(person_age)
//   // pgClient.query("INSERT INTO people(name, age) VALUES($1, $2)", [person_name, person_age]);

//   redisClient.hset("people", person_name, person_age)



// })



app.listen(5000, (err) => {
  console.log("Listening");
  console.log("harrrowwww!!!!");
  console.log("Whats the difference?!?!?!!?!?");
  console.log("oh bossy!!!!!!!!!!!");

});

