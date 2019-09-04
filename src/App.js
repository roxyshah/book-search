import React, { Component } from 'react';
import './App.css';

import FilterableBookList from './FilterableBookList/FilterableBookList';

// import AddBookmark from './AddBookmark/AddBookmark';
// import BookmarkApp from './BookmarkApp/BookmarkApp';

/*apiKey = 
AIzaSyCwUNMT_BV7-942SxZyr8ESdePSPNayqlk*/


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: 'Outsiders',
      filterOption: 'All',
      showAddForm: false
    };
  }
//if this is true
//do this
//else do this (return empty string)
//adding in api key  
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?'+
      (this.state.searchTerm 
        ? 'q=' + this.state.searchTerm + '&'
        : '')
        + 'key=AIzaSyCwUNMT_BV7-942SxZyr8ESdePSPNayqlk';
    const options = {
      method: 'GET',
      headers: {
        //add key after Bearer
        // "Authorization": "Bearer AIzaSyCwUNMT_BV7-942SxZyr8ESdePSPNayqlk",
        "Content-Type": "application/json"
      }
    };
    console.log(url);
    fetch(url, options)
      .then(res => {
        console.log(res);
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  render() {
    // const page = this.state.showAddForm
    //       ? <AddBookmark 
    //              showForm={show => this.setShowAddForm(show)} 
    //              handleAdd={bookmark => this.addBookmark(bookmark)}/>
    //       : <BookmarkApp bookmarks={this.state.bookmarks} showForm={show => this.setShowAddForm(show)}/>; 

    return (
      <div className="App">
        <FilterableBookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
