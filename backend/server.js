const express = require('express');
const { chats } = require("./data/data");


const app = express();

app.get("/", (req, res) => {
    res.send("API is Running");
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    //console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

//listen
app.listen(5000, console.log("Server running on port 5000"));