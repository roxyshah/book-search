import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render () {
        return (
            <div className="SearchBox">
                <span>Search: </span>
                <input 
                    placeholder="Search-term" 
                    value={this.props.searchTerm}
                    onChange={e => this.props.updateSearchTerm(e.target.value)}/>
                
                <input 
                    type="submit" 
                    id="submit" 
                    value="Search"
                    onClick={this.props.handleUpdate}/>
            </div>
        );
    }
}

export default SearchBox;