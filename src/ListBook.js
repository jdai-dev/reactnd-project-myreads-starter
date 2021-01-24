import React, {Component} from "react"
import Book from "./Book";
import PropTypes from 'prop-types'

class ListBook extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        onMove: PropTypes.func.isRequired
    }

    render() {
        const showingBooks = this.props.books.filter(book => book.shelf === this.props.shelf);
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.shelf}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {showingBooks.map((book) => (
                            <Book key={book.id} book={book} onChange={(e) => this.props.onMove(e.target.value,book)}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ListBook