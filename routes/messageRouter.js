const express = require("express");

const messageRouter = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];



// Route to display the main message board
messageRouter.get("/", (req,res) => {
    res.render("index", {
        title: "Mini Messageboad",
        messages: messages,
    })
});

//Route to display the form for creating a new message
messageRouter.get("/new", (req,res) => {
    res.render("form");
});

//Route to post the details of the new message to the server 

messageRouter.post("/new", (req, res) => {
    // Extracting details from request body
    const { user, text } = req.body;

    if (user && text) {
        messages.push({ user: user, text: text });
    }
    
    res.redirect("/");
});


module.exports = messageRouter;