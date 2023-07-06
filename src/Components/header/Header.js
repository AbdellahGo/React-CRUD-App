import React, { useEffect, useState } from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logInOut } from '../../Redux/AuthorSlice'
const Header = () => {
    const { error, deleteBooks } = useSelector(state => state.books)
    const { isLogIn } = useSelector(state => state.author)
    const [showAlert, setShowAlert] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        if (deleteBooks !== undefined) {
            setShowAlert(true)
            const timer = setTimeout(() => {
                setShowAlert(false)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [dispatch, deleteBooks])


    const alert = () => {
        return (
            <div className="alert alert-info" role="alert">
                This book has been deleted <span className='deleted'>{deleteBooks}</span>
            </div>
        )
    }

    return (
        <header>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {showAlert && alert()}
            <div className='container'>
                <div className='parent'>
                    <h1>AGrun</h1>
                    <span onClick={() => dispatch(logInOut())}>{isLogIn ? 'Log out' : 'Log in'}</span>
                </div>
            </div>
        </header>
    )
}

export default Header



