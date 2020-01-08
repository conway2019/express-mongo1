const mongoose = require("mongoose")
require("../model")
let bookDao = require("../dao/BookDao")
const assert = require("assert")

describe("测试bookDAO", function () {
    before(function () {
        mongoose.connect("mongodb://39.101.130.31:27017/demo02", function (err) {
            if (!err) console.log("连接到mongodb")
        })
    })

    after(function () {
        mongoose.disconnect()
        console.log("断开mongodb连接")
    })

    it("测试addBook", function (done) {
        let book = {name: "john1", price: 100}
        bookDao.addBook(book, function (newBook) {
            assert.ok(newBook._id != null)
            done()
        })
    })

    it("测试findAllBooks", function (done) {
        bookDao.findAllBooks(function (books) {
            assert.ok(books.length > 0)
            books.forEach(book => console.log(book._id))
            done()
        })
    })

    it("测试deleteBook", function (done) {
        bookDao.deleteBook("5e15c893b6eff020ac692070", function () {
            console.log({})
            done()
        })

    })
})


