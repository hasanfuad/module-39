import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);

    return (
        <div>
            <h4>Select category has:{category} </h4>
        </div>
    );
};

export default CategoryDetail;