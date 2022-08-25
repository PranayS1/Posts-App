const path = require("path")
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

var app = express();

mongoose.connect(
        "mongodb+srv://Pranay:Lh5H1lXeiGbGda9n" +
        // + process.env.MONGO_ATLAS_PW +
        "@cluster0-ik25u.mongodb.net/node-angular?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('Connected to db!');
    })
    .catch((err) => {
        console.log(process.env);
        console.log('Connection failed!');
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));
app.use("/", express.static(path.join(__dirname, "angular")));

// below CORS settings are not required while deploying app as single package for both frontend and backend

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        "Original, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
})

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;