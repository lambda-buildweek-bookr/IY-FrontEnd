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
            title={book.title}
            author={book.author}
            snippet={book.brief_desc}
            image={book.image_url}
          />
        ))}
      </div>
    );
  }
}
export default BookList;
