import React, { Component } from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=AIzaSyBaR3rS4nSkQ0XAQ1MCX05KHEk7yJ6ZIeg"
      )

      .then(res => {
        console.log(res.data.items);
        this.setState({
          books: res.data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props => <BookList {...props} books={this.state.books} />}
        />
      </div>
    );
  }
}

export default App;
