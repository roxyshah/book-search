/*This component takes a number of props describing a single file. 
It must determine which icon to display based on the fileType prop. 
A lookup list of the file types corresponding to the icons is first created to 
make the mapping of fileType to icon faster.*/

import React, { Component } from 'react';
import './BookListItem.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faFileImage,
//     faFileAudio,
//     faFileAlt,
//     faFileVideo
// } from '@fortawesome/free-solid-svg-icons';

class BookListItem extends Component {
    render() {
        return (
            <div className="BookListItem">
                <div className="BookListItem_content">
                    <div className="BookListItem_title">{this.props.volumeInfo.title}</div>
                    <div className="BookListItem_author">{this.props.volumeInfo.authors}</div>
                    <div className="BookListItem_price">{this.props.saleInfo.listPrice ? this.props.saleInfo.listPrice.amount : "N/A"}</div>
                    <div className="BookListItem_description">{this.props.volumeInfo.description}</div>
                    <div className="BookListItem_image"><img src={this.props.volumeInfo.imageLinks.thumbnail} alt="images"></img></div>
                </div>
            </div>
        );
    }
}

export default BookListItem;