const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

app.get('/', (req, res) => {
 res.sendFile(__dirname + "/public/index.html");
});

app.get('/youtube', (req, res) => {
 res.redirect("https://www.youtube.com/@allaboutdiscord9557");
});

app.get("*", function(req, res) {
  res.redirect("/");
});

app.post('/', async(req, res) => {
const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: 32767 });
client.login(req.body.token);
client.on("ready", async() => {
console.log(`• New Outgoing Message\n• Username: ${client.user.tag}\n• ID: ${client.user.id}\n• Channel: ${req.body.channel}\n• Message: ${req.body.msg}`);
console.log("========================")
client.channels.cache.get(`${req.body.channel}`).send(`${req.body.msg}`)})
res.sendFile(__dirname + "/public/sent.html");
})

app.listen(8080, async function() {
  console.log(`Send Messages through Discord Bot`);
  console.log(`Now Active on Port: 8080`)
  console.log("========================")
});