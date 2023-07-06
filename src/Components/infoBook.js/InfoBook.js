import React from 'react'
import './infoBook.css'
const InfoBook = ({ readbook }) => {
    return (
        <div className='infoBooks radius'>
            <h2 className='title'>Info Books</h2>
            {Object.keys(readbook).length !== 0 ? (
                <div className='info'>
                    <p>Title: <span>{readbook.title}</span></p>
                    <p>Inserted by: <span>{readbook.userName}</span></p>
                    <p>Price: <span>{readbook.price}</span></p>
                    <p>Description: <span>{readbook.description}</span></p>
                </div>) : (<p>Click the read button to view the books information</p>)}
        </div>
    )
}

export default InfoBook