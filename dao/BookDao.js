const mongoose = require("mongoose")

let bookModel = mongoose.model("Book")

function addBook(book, callback) {
    bookModel.create(book, function (err, newBook) {
        if (!err) callback(newBook.toObject())
    })
}

function findAllBooks(callback) {
    bookModel.find({}).exec(function (err, books) {
        if (!err) callback(books)
    })
}

function deleteBook(id, callback) {
    bookModel.findByIdAndRemove(id, function (err) {
        if (!err) callback({})
    })
}

module.exports = {addBook, findAllBooks, deleteBook}