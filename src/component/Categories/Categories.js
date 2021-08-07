import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h2>This Categories{category}</h2>
            <CategoryDetail/>
        </div>
    );
};

export default Categories;