/*Allow filters such as type of book or whether the book 
is a free ebook or not*/

import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
        const filterOption = this.props.filterOptions;
        return (
            <div className="FilterOptions">
                <div className="FilterOptions--option">
                    <label htmlFor="filter-printType">
                    <span>Print Type: </span> 
                        <select
                            name="print-type"
                            id="print-type"
                            value={this.props.printType}
                            onChange={e => this.props.handlePrintTypeChange(e.target.value)}>
                                <option value="all">All</option>
                                <option value="books">Books</option>
                                <option value="magazines">Magazines</option>
                        </select>
                    </label>

                    <label htmlFor="filter-bookType">
                    <span> Book Type: </span>
                        <select
                            name="book-type"  
                            id="book-type" 
                            value={this.props.bookType}
                            onChange={e => this.props.handleBookTypeChange(e.target.value)}>
                                <option value="no-filter">No Filter</option>
                                <option value="partial">Partial</option>
                                <option value="full">Full</option>
                                <option value="free-ebooks">Free Ebooks</option>
                                <option value="paid-ebooks">Paid Ebooks</option>
                                <option value="ebooks">Ebooks</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default FilterOptions;