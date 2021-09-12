const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Hey, I am enjoying cloud session day 2")
})

app.get("/info", (req, res) => {
    res.send("For information related to next session check out GDSC NITS page now")
})

app.get("/GDSC", (req, res) => {
    res.send("GDSC NITS is organizing a session on JetPack Compose in the coming weeks")
})


app.listen(5000, () => {
    console.log("Running on port 5000")
})