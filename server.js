const express = require("express")
const uploadImages = require("./uploadImages.js")
const app = express()
const bodyParser = require("body-parser")
app.use(express.static("."))
app.set("view engine", "ejs")



app.get("/", function(req, res){
	uploadImages.save()
	res.render("index", {page: "NFT market shop"})
})

app.post("/", function(req, res){
	res.redirect("/")
})


app.listen(300)