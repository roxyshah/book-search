/*Allow filters such as type of book or whether the book 
is a free ebook or not*/

import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    render() {
        const { filterOption } = this.props;
        return (
            <div className="FilterOptions">
                <div className="FilterOptions--option">
                    <label htmlFor="filter-all">
                        <input 
                            type="radio" 
                            value="All" 
                            id="filter-all" 
                            name="filter" 
                            checked={filterOption === "All"}
                            onChange={e => this.props.handleFilterChange(e.target.value)}/>
                    All
                    </label>
                </div>

                <div className="FilterOptions--option">
                    <label htmlFor="filter-uploaded">
                        <input 
                            type="radio" 
                            value="Uploaded" 
                            id="filter-uploaded" 
                            name="filter" 
                            checked={filterOption === "Uploaded"}
                            onChange={e => this.props.handleFilterChange(e.target.value)}/>
                    Uploaded
                    </label>
                </div>

                <div className="FilterOptions--option">
                    <label htmlFor="filter-synced">
                        <input 
                            type="radio" 
                            value="Synced" 
                            id="filter-synced" 
                            name="filter" 
                            checked={filterOption === "Synced"}
                            onChange={e => this.props.handleFilterChange(e.target.value)}/>
                    Synced
                    </label>
                </div>

                <div className="FilterOptions--option">
                    <label htmlFor="filter-new">
                        <input 
                            type="radio" 
                            value="New" 
                            id="filter-new" 
                            name="filter" 
                            checked={filterOption === "New"}
                            onChange={e => this.props.handleFilterChange(e.target.value)}/>
                    New
                    </label>
                </div>
            </div>
        );
    }
}

export default FilterOptions;