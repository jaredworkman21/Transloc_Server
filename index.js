const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Location Data");
})

app.listen(2020, () => {
    console.log("listening on 2020")
})