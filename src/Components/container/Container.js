import React, { useEffect } from 'react'
import ListBooks from '../listBooks/ListBooks'
import InfoBook from '../infoBook.js/InfoBook'
import './container.css'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../Redux/BooksSlice'
const Container = () => {
    const { books, pending, readbook } = useSelector(state => state.books)
    const { isLogIn } = useSelector(state => state.author)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
    }, [])

    return (
        <div className='booksInfoList'>
            <div className='container'>
                <div className='parent'>
                    <ListBooks books={books} dispatch={dispatch} pending={pending} isLogIn={isLogIn}/>
                    <InfoBook readbook={readbook} />
                </div>
            </div>
        </div>
    )
}

export default Container