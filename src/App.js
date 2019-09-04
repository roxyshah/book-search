import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import FilterableBookList from './FilterableBookList/FilterableBookList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: '',
      printType:"all",
      bookType:"no-filter",
      showAddForm: false
    };
  }

//if this is true
//do this
//else do this (return empty string)
//adding in api key  
  fetchBooks() {
    const url = 'https://www.googleapis.com/books/v1/volumes?'+
      (this.state.searchTerm 
        ? 'q=' + this.state.searchTerm + '&'
        : '')
      + (this.state.printType !== "all"
        ? "printType=" + this.state.printType + '&'
        : '')
      + (this.state.bookType !== "no-filter"
          ? "filter=" + this.state.bookType + '&'
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

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
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
    });
  }
  

  updatePrintType(option) {
    this.setState({
      printType: option
    });
    this.fetchBooks();
  }

  updateBookType(option) {
    this.setState({
      bookType: option
    });
    this.fetchBooks();
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          printType={this.state.printType}
          bookType={this.state.bookType}
          handleUpdate={() => this.fetchBooks()}
          handlePrintTypeChange={option => this.updatePrintType(option)}
          handleBookTypeChange={option => this.updateBookType(option)}
          updateSearchTerm={term => this.updateSearchTerm(term)}/>
        <FilterableBookList 
          books={this.state.books}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOptions}/>
      </div>
    );
  }
}

export default App;
