const express = require('express');
const app = express();


app.get("/", (req, res)=> {
    res.send("welcome to express server");
});

app.listen(3002, ()=> {
        console.log("server running at port 3002");
});