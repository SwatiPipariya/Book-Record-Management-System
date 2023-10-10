const express = require("express");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook } = require("../controllers/book-controller");
const { books } = require("../data/books.json")
const { users } = require("../data/users.json")
// const { route } = require("./users")

// const BookModel = require("../models/book-models")
// const UserModel = require("../models/user-models")


const router = express.Router();

const { UserModel, BookModel } = require("../models/index");
const { updateBookById } = require("../controllers/book-controller");

/**
 * Route: /books
 * Method: GET
 * Description: Getting all users
 * Access: Public
 * Parameters: None
 */

router.get("/", getAllBooks);

// router.get("/", (req,res) => {
//     res.status(200).json({
//         success: true,
//         message: "Got All The Books",
//         data : books,
//     });
// });



/**
 * Route: /books/issued
 * Method: GET
 * Description: Getting all issued books
 * Access: Public
 * Parameters: None
 */

// router.get("/issued", (req, res) => {
//     const usersWithTheIssuedBook = users.filter((each) => {
//         if (each.issuedBook) return each;
//     });

//     const issuedBooks = [];

//     usersWithTheIssuedBook.forEach((each) => {
//         const book = books.find((book) => (book.id === each.issuedBook));

//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;

//         issuedBooks.push(book);
//     });
//     if (issuedBooks.length === 0) {
//         return res.status(404).json({
//             success: false,
//             message: "No Book Have Been Issued Yet...",
//         });
//     }
//     return res.status(200).json({
//         success: true,
//         message: "Users With The Issued Books...",
//         data: issuedBooks,

//     });
// });

router.get("/issued", getAllIssuedBooks),

    /**
     * Route: /books
     * Method: POST
     * Description: Add A New Book
     * Access: Public
     * Parameters: None
     * Data: id, name, author, genre, price, publisher
     */

    // router.post("/", (req, res) => {
    //     const {data} = req.body;

    //     if(!data) {
    //         return res.status(404).json({
    //             success: false,
    //             message: "No Data to add a book",
    //         });
    //     }

    //     const book = books.find((each) => each.id === data.id);
    //     if(book){
    //         return res.status(404).json({
    //             success: false,
    //             message: "Id Already Exists !!"
    //         })
    //     }
    //     const allBooks = {...books, data};

    //     return res.status(201).json({
    //         success: true,
    //         message: "Book Added Successfully",
    //         data: allBooks,
    //     });
    // })

    router.post("/", addNewBook),



    /**
     * Route: /books
     * Method: GET
     * Description: Getting all books by Id
     * Access: Public
     * Parameters: Id
     */

    router.get("/:id", getSingleBookById);

// router.get("/:id", (req,res) => {
//     const {id} = req.params;
//     const book = books.find((each) => each.id === id);

//     if(!book){
//         return res.status(404).json({
//             success: false,
//             message: "Book Not Found",
//         });
//     }

//     return res.status(200).json({
//         success: true,
//         message: "Found The Book By Their Id",
//         data: book,
//     })

// })

/**
 * Route: /updateBook/:id
 * Method: PUT
 * Description: Updating a book by Id
 * Access: Public
 * Parameters: Id
 * Data: id, name, author, genre, price, publisher
*/

   router.put("/updateBook/:id", updateBookById);

// router.put("/updateBook/:id", (req, res) => {
//     const { id } = req.params;
//     const { data } = req.body;

//     const book = books.find((each) => each.id === id);

//     if (!book) {
//         return res.status(404).json({
//             success: false,
//             message: "Book Not Found For This ID",
//         })
//     }

//     const updateData = books.map((each) => {
//         if (each.id === id) {
//             return { ...each, ...data };
//         }

//         return each;
//     });

//     return res.status(200).json({
//         success: true,
//         message: "Updated the book by their id",
//         data: updateData,

//     })
// })




module.exports = router;

