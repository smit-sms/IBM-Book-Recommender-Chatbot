const express = require('express')
const app     = express()
const port    = process.env.PORT || 8000

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.get("/", (req,res)=>{
	res.render('index')
})

app.listen(port, () => {
    console.log(`server started on port ${port}...`)
})