const express = require("express");
const exphbs = require("express-handlebars");
const flash = require("express-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const pg = require("pg");
const Pool = pg.Pool;
const Roster = require("./waiter");


const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://codex:pg1212@localhost:5432/waiter";

const pool = new Pool({
  connectionString,
});
const waiterD = Roster(pool);

app.get('/',async function(req,res){
  res.render('index',{
    username:""
  })
})

app.post('/waiters/:username', async function(req,res){
  let typeName = req.params.username
res.render('index')
})

app.get('/waiters/:username', async function(req,res){
  let name = req.params.username
res.render('shedule',{
  username: name

})
// console.log(name)
})

app.get('/days', async function(req,res){
res.render('days')
})

const PORT = process.env.PORT || 3500;
app.listen(PORT, function () {
  console.log("App starting on port", PORT);
});