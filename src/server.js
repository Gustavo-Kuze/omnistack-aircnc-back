const express = require("express");

const app = express();

// módulo do express usado para entender
// requisições application/json
app.use(express.json());

app.post("/users", (req, res) => {
    return res.json(req.body);
});

app.listen(3334);
