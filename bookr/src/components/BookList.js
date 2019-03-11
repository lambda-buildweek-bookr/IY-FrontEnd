import React, { Component } from "react";

import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        {this.props.books.map(book => (
          <Book
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            snippet={book.searchInfo.textSnippet}
            image={book.volumeInfo.imageLinks.smallThumbnail}
          />
        ))}
      </div>
    );
  }
}
export default BookList;
