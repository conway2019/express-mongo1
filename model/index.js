const mongoose = require("mongoose")

let BookSchema = mongoose.Schema({name: String, price: Number})
let CustomerSchema = mongoose.Schema({name: String, password: String, score: Number})

mongoose.model("Book", BookSchema)
mongoose.model("Customer", CustomerSchema)