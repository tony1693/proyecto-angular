"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Book = /** @class */ (function () {
    function Book(id_book, id_user, title, type, author, price, photo) {
        if (id_book === void 0) { id_book = 0; }
        if (id_user === void 0) { id_user = 0; }
        if (title === void 0) { title = ''; }
        if (type === void 0) { type = ''; }
        if (author === void 0) { author = ''; }
        if (price === void 0) { price = 0; }
        if (photo === void 0) { photo = ''; }
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
    return Book;
}());
exports.Book = Book;
