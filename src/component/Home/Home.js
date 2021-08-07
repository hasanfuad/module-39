import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>Header number: {category}</h1>
            <Categories/>
        </div>
    );
};

export default Home;