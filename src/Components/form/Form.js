import React, { useRef } from 'react'
import './form.css'
import { useDispatch, useSelector } from 'react-redux'
import { insertBooks } from '../../Redux/BooksSlice'
const Form = () => {
    const dispatch = useDispatch()
    const title = useRef(null)
    const description = useRef(null)
    const price = useRef(null)
    const { isLogIn } = useSelector(state => state.author)

    const handelSubmit = (ev) => {
        ev.preventDefault()
            const bookInfo = {
                title: title.current.value,
                description: description.current.value,
                price: price.current.value
            }
            dispatch(insertBooks(bookInfo))
            title.current.value = null
            description.current.value = null
            price.current.value = null
    }
    return (
        <div className='form' onSubmit={handelSubmit}>
            <div className='container'>
                <div className='parent'>
                    <form className='radius'>
                        <label htmlFor='price'>Title:</label>
                        <input id='price' required ref={title} type='text' placeholder='Enter the title of the book' />
                        <label htmlFor='price'>Price:</label>
                        <input id='price' required ref={price} type='number' placeholder='Enter the price of the book' />
                        <label htmlFor='description'>Description:</label>
                        <textarea required ref={description} placeholder='Enter book description'></textarea>
                        <button disabled={!isLogIn} type='submit'>Enter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form