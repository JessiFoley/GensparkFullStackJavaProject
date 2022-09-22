import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createBook } from '../../service/BooksDataService'

const AddBook = ({ books, setBooks }) => {

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [binding, setBinding] = useState("")
    const [price, setPrice] = useState(0)

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        const book = {
            "bookTitle": title,
            "bookGenre": genre,
            "bookBinding": binding,
            "bookPrice": price,
        }
        createBook(book)
        setBooks(...books, book)
        navigate("/")
    }

    return (

        <div>
            <h2>Add a Book</h2>
            <form style={{ textAlign: "left", marginLeft: "10em" }} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="title" required={true} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="genre" id="genre" required={true} placeholder="Genre" onChange={(e) => setGenre(e.target.value)} />
                <br />
                <label htmlFor="binding">Binding</label>
                <br />
                <input type="text" name="binding" id="binding" required={true} placeholder="Binding" onChange={(e) => setBinding(e.target.value)} />
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="text" name="price" id="price" required={true} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                <br />
                <button style={{ width: "auto" }} type="submit">Add book</button>
            </form>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default AddBook