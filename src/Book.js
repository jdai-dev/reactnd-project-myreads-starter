import SelectShelf from "./SelectShelf";
import React from "react";

function Book(props) {
    const book = props.book

    return (
        <li>
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 188,
                            backgroundImage: 'url("' + book.imageLinks.thumbnail + '")'
                        }}>
                    </div>
                    <SelectShelf shelf={book.shelf} onChange={props.onChange}/>
                </div>
                <div className='book-title'>
                    {book.title}
                </div>
                <div className='book-authors'>
                    {book.authors}
                </div>
            </div>
        </li>
    )
}

export default Book