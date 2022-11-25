// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// middlewares: 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("uploads"));


// database connections
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() =>  console.log('Connected to the database!')).catch(err =>  console.log(err));

// routes prefix
app.use("/api/product", require("./routes/product.routes"))
app.use("/api/user", require("./routes/user.routes"))
app.use("/api/category", require("./routes/category.routes"))
app.use("/api/account", require("./routes/account.routes"))

// start serve
app.listen(port, () => console.log(`server running at http://localhost:${port}`));
