const express = require("express")
const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./posts.db", sqlite3.OPEN_READWRITE, (err) => {
   if (err) return console.error(err.message)

   console.log("** Connected!");
})

const app = express()
const PORT = 3001

const sql = `SELECT * FROM posts`

db.close((err) => {
   if (err) return console.error(err.message)
})

// app.get
// app.post
// app.delete
// app.put

app.get("/", (req, res) => {
   res.send("Hello World")
})

app.listen(PORT, () => {
   console.log(`* Servidor rodando em: http://localhost:3001/`);
})
