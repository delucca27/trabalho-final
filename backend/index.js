const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const app = express()
const PORT = 4000

const db = new sqlite3.Database("./posts.db", sqlite3.OPEN_READWRITE, (err) => {
   if (err) return console.error(err.message)

   console.log("** Connected!");
})


const sql = `SELECT * FROM posts`

db.close((err) => {
   if (err) return console.error(err.message)
})

// operações do server

app.get("/", (req, res) => {
   res.send("Hello World")
})

app.get(`/api`, (req, res) => {
   res.json({
      "posts": ["id", "id2"]
   })
})

app.listen(PORT, () => {
   console.log(`* Servidor rodando em: http://localhost:3001/`);
})
