import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateBook } from '../../service/BooksDataService'

const UpdateBook = ({ books, setBooks, bookToUpdate }) => {

    const [id, setId] = useState(bookToUpdate.bookId)
    const [title, setTitle] = useState(bookToUpdate.bookTitle)
    const [genre, setGenre] = useState(bookToUpdate.bookGenre)
    const [binding, setBinding] = useState(bookToUpdate.bookBinding)
    const [price, setPrice] = useState(bookToUpdate.bookPrice)

    const navigate = useNavigate();

    const onSubmit = () => {
        const book = {
            "bookId": id,
            "bookTitle": title,
            "bookGenre": genre,
            "bookBinding": binding,
            "bookPrice": price,
        }
        updateBook(book)
        setBooks(...books, book)
        navigate("/")
    }

    return (
        <div>
            <h2>Update a Book</h2>
            <form style={{ textAlign: "left", marginLeft: "10em" }} onSubmit={onSubmit}>
                <input type="hidden" value={id} onChange={(e) => setId(e.target.value)} />
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="title" required={true} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="genre" id="genre" required={true} placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                <br />
                <label htmlFor="binding">Binding</label>
                <br />
                <input type="text" name="binding" id="binding" required={true} placeholder="Binding" value={binding} onChange={(e) => setBinding(e.target.value)} />
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="text" name="price" id="price" required={true} placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <button style={{ width: "auto" }} type="submit">Update book</button>
            </form>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default UpdateBook