const express = require('express')
const app = express()
 
app.get("/api", (req, res) => {
    res.json({ message: "Hello from serverdsdsd!"});
  })




app.listen(3002)