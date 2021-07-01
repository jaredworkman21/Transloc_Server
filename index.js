const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Location Data");
})

app.listen(process.env.PORT || 2020, () => {
    console.log("listening")
})