const { UserModel, BookModel } = require("../models");
// const issuedBook = require("../dtos/book-dto");
const IssuedBook = require("../dtos/book-dto");

// const getAllBooks = () => {};
exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();

    if (books.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Book Found",
        })
    }

    res.status(200).json({
        success: true,
        data: books,
    })
};

exports.getSingleBookById = async (req, res) => {
    const { id } = req.params;
    const book = await BookModel.findById(id);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book Not Found",
        });
    }

    return res.status(200).json({
        success: true,
        messaage: "Found The Book By Their Id",
        data: book,
    })
};

exports.getAllIssuedBooks = async (req, res) => {
    const users = await UserModel.find({
        issuedBook: { $exists: true },
    }).populate("issuedBook");

    // Data Transfer Object
    const issuedBooks = users.map((each) => new IssuedBook(each));

    if (this.getAllIssuedBooks.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Books Have Been Issued Yet..",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Users With The Issued Books...",
        data: issuedBooks,
    });
}

exports.addNewBook = async (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "No Data To Add A Book",
        });
    }

    await BookModel.create(data);
    const allBooks = await BookModel.find();



    return res.status(200).json({
        success: true,
        message: "Added Book Successfully",
        data: allBooks,
    })
}

exports.updateBookById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const updateBook = await BookModel.findOneAndUpdate({
        _id: id,
    }, data, {
        new: true,
    })

    return res.status(200).json({
        success: true,
        message: "Updated a Book By Their Id",
        data: updateBook,
    })
}


// module.exports = {getAllBooks, getSingleBookById };