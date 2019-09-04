/*This component is responsible for taking the array of files as a prop named files 
and displaying a ListItem for each file in the array. For this, the map method 
is used to iterate the array and output a ListItem component for each file*/

import React, { Component } from 'react';
import './FilterableBookList.css';
import BookListItem from '../BookListItem/BookListItem';

class FilterableBookList extends Component {
    render() {
        // const { searchTerm, filterOption } = this.props;
        //so much going on here?
        /* .filter(file => file.name.includes(searchTerm)
                 && (filterOption === 'All' || file.status === filterOption))*/
                console.log(this.props.books);
                 const list = this.props.books
            .map((book, key) => <BookListItem 
                volumeInfo={book.volumeInfo}
                saleInfo={book.saleInfo} 
                key={key}/>);
        return (
            <div className="FilterableBookList">
                {list}
            </div>
        );
    }
}

FilterableBookList.defaultProps = {
    books: []
};

export default FilterableBookList;

