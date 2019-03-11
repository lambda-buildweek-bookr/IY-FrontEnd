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
      .get("https://bookr-buildweek-backend.herokuapp.com/api/books")

      .then(res => {
        console.log(res.data);
        this.setState({
          books: res.data
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
