const express = require("express");
const dotenv = require("dotenv");

const DbConnection = require("./databaseConnection")

const userRouter = require("./Routes/Users");
const booksRouter = require("./Routes/Books");

dotenv.config();

const app = express();

DbConnection();

const PORT = 8081;

app.use(express.json());


app.post("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running :-)",
        data: "hey",
    });
});

/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parameters: None
 */

app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

app.use("/users", userRouter);
app.use("/books", booksRouter);

app.get("*", (req, res) => {
    res.status(404).json({
        message: "This route doesn't exists."
    });
});


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});