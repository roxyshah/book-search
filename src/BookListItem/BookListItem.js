import React, { Component } from 'react';
import './BookListItem.css';

class BookListItem extends Component {
    render() {
        return (
            <div className="BookListItem">
                <div className="BookListItem_image">
                    <div className="BookListItem_image"><img src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}></img></div>
                </div>
                <div className="BookListItem_content">
                    <div className="BookListItem_title"><a href={this.props.volumeInfo.infoLink}>{this.props.volumeInfo.title}</a></div>
                    <div className="BookListItem_author">{this.props.volumeInfo.authors}</div>
                    <div className="BookListItem_price">{this.props.saleInfo.listPrice ? <span>Price: ${this.props.saleInfo.listPrice.amount}</span> : "N/A"}</div>
                    <div className="BookListItem_description">{this.props.volumeInfo.description}</div>
                </div>
            </div>
        );
    }
}

export default BookListItem;