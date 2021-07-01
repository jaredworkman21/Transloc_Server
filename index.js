const express = require("express");
const app = express();
const jsonData = require("./data.json");

app.get("/", (req, res) => {
    res.send(jsonData);
})

app.listen(process.env.PORT || 2020, () => {
    console.log("listening")
})