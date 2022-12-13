const express = require("express")
const cors = require("cors")
const axios = require("axios")
const sqlite3 = require("sqlite3").verbose()
const app = express()
const PORT = 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const db = new sqlite3.Database("./posts.db", sqlite3.OPEN_READWRITE, (err) => {
   if (err) return console.error(err.message)

   console.log("** Connected!");
})
const sql = `SELECT * FROM posts`

// operações do server
app.get("/", cors(), async (req, res) => {
   res.send("Testando...")
})

app.get("/api", (req, res) => {
   res.json({ "posts" : ["post1", "post2", "post3"] })
})

app.listen(PORT, () => {
   console.log(`* Servidor rodando em: http://localhost:${PORT}/`);
})

db.close((err) => {
   if (err) return console.error(err.message)
})