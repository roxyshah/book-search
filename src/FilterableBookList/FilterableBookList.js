import React, { Component } from 'react';
import './FilterableBookList.css';
import BookListItem from '../BookListItem/BookListItem';

class FilterableBookList extends Component {
    render() {
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

