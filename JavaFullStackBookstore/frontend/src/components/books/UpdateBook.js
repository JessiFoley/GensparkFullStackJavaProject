import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateBook } from '../../service/BooksDataService'

const UpdateBook = ({ bookToUpdate }) => {
    const [updatedBook, setUpdatedBook] = useState(bookToUpdate);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        updateBook(updatedBook)
            .then(() => navigate("/inventory"));
    }

    const handleChanges = (e) => {
        setUpdatedBook({
            ...updatedBook,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <h2>Update a Book</h2>
            <form style={{ textAlign: "left", marginLeft: "10em" }} onSubmit={onSubmit}>
                <input type="hidden" value={updatedBook.bookId} onChange={handleChanges} />
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="bookTitle" id="title" required={true} placeholder="Title" value={updatedBook.bookTitle} onChange={handleChanges} />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="bookGenre" id="genre" required={true} placeholder="Genre" value={updatedBook.bookGenre} onChange={handleChanges} />
                <br />
                <label htmlFor="binding">Binding</label>
                <br />
                <input type="text" name="bookBinding" id="binding" required={true} placeholder="Binding" value={updatedBook.bookBinding} onChange={handleChanges} />
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="text" name="bookPrice" id="price" required={true} placeholder="Price" value={updatedBook.bookPrice} onChange={handleChanges} />
                <br />
                <button style={{ width: "auto" }} type="submit">Update book</button>
            </form>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default UpdateBook