import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createBook } from '../../service/BooksDataService'

const initialState = {
    "bookTitle": "",
    "bookGenre": "",
    "bookBinding": "",
    "bookPrice": 0,
};

const AddBook = () => {
    const [bookToAdd, setBookToAdd] = useState(initialState);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        createBook(bookToAdd)
            .then(() => setBookToAdd(initialState))
            .then(() => navigate("/"));
    }

    const handleChanges = (e) => {
        setBookToAdd({
            ...bookToAdd,
            [e.target.name]: e.target.value,
        });
    }

    return (

        <div>
            <h2>Add a Book</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="bookTitle" id="title" required={true} placeholder="Title" onChange={handleChanges} />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="bookGenre" id="genre" required={true} placeholder="Genre" onChange={handleChanges} />
                <br />
                <label htmlFor="binding">Binding</label>
                <br />
                <input type="text" name="bookBinding" id="binding" required={true} placeholder="Binding" onChange={handleChanges} />
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="text" name="bookPrice" id="price" required={true} placeholder="Price" onChange={handleChanges} />
                <br />
                <button style={{ width: "auto" }} type="submit">Add book</button>
            </form>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default AddBook