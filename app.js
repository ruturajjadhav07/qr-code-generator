const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const qrcode = require("qrcode")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/code", (req, res) => {
    // res.render("index.ejs")
    const text = req.body.text
    // console.log(text)
    qrcode.toDataURL(text, (err, src) => {
        res.render("code.ejs", {
            Qr_code : src
        })
    })
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})