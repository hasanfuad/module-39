import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {increase} = props;
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>Header number: {increase}</h1>
            <Categories increase={increase}/>
        </div>
    );
};

export default Home;