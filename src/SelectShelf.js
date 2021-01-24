import React from "react"

class SelectShelf extends React.Component {

    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={this.props.onChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default SelectShelf