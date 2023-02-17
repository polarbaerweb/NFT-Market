const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(express.static("."))
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("index", {page: "NFT market shop"})
})


app.listen(300)