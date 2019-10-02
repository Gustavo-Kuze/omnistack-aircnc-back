const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Nada pra ver aqui...");
});

app.listen(3334);
