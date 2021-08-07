import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {increase} = props;
    return (
        <div>
            <h2>This Categories</h2>
            <CategoryDetail increase={increase}/>
        </div>
    );
};

export default Categories;