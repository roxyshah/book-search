/*This component is responsible for taking the array of files as a prop named files 
and displaying a ListItem for each file in the array. For this, the map method 
is used to iterate the array and output a ListItem component for each file*/

import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
    render() {
        const { searchTerm, filterOption } = this.props;
        //so much going on here?
        const list = this.props.files
            .filter(file => file.name.includes(searchTerm)
                && (filterOption === 'All' || file.status === filterOption))
            .map((file, key) => <ListItem {...file} key={key} />);
        return (
            <div className="FilterableList">
                {list}
            </div>
        );
    }
}

FilterableList.defaultProps = {
    files: []
};

export default FilterableList;

