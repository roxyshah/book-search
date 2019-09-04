import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
    render () {
        return (
            <div className="SearchBar">
                <div className="SearchBar--heading">
                    <h1>Google Book Search</h1>
                </div>
                <div className="SearchBar--controls">
                    <SearchBox 
                        searchTerm={ this.props.searchTerm }
                        handleUpdate={ this.props.handleUpdate}
                        printType={this.props.printType}
                        bookType={this.props.bookType}
                        updateSearchTerm={this.props.updateSearchTerm} />
                    
                    <FilterOptions 
                        filterOption={ this.props.FilterOptions }
                        handlePrintTypeChange={ this.props.handlePrintTypeChange }
                        handleBookTypeChange={ this.props.handleBookTypeChange }/>
                </div>
                
            </div>
        );
    }
}

export default SearchBar;