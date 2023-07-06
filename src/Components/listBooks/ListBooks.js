import React from 'react'
import './listBooks.css'
import { deleteBooks, readBooks } from '../../Redux/BooksSlice'
const ListBooks = ({ books, dispatch, pending, isLogIn }) => {
    const deletedBook = ''
    const listBooks = books.length === 0 ? 'There are no books to display here' : books.map((book) => (
        <div className='book' key={book.id}>
            <div className='title'>
                <i className="fa-solid fa-book"></i>
                <h3>{book.title}</h3>
            </div>
            <div className='buttons'>
                <button onClick={() => dispatch(readBooks(book.id))}>read</button>
                <button disabled={!isLogIn} onClick={() => dispatch(deleteBooks(book))}>delete</button>
            </div>
        </div>
    ))

    return (
        <div className='listBooks radius'>
            <h2 className='title'>List Books</h2>
            {pending ? (
                <p>loading...</p>
            ) : (<div className='list'> {listBooks} </div>)}
        </div>
    )
}

export default ListBooks