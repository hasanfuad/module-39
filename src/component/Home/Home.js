import React from 'react';

const Home = (props) => {
    const {increase} = props;
    return (
        <div>
            <h1>Header number: {increase}</h1>
        </div>
    );
};

export default Home;