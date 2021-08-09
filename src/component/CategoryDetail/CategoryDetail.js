import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    // const category = useContext(CategoryContext);
    const {bName} = props.product;

    return (
        <div>
            <h4>Select category has:{bName} </h4>
        </div>
    );
};

export default CategoryDetail;