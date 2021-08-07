import React from 'react';

const Header = (props) => {
    const {increase, setIncrease} = props;
    return (
        <div>
            <h1>Number:{increase}</h1>
            <button onClick={()=>setIncrease(increase+1)}>Increase</button>
        </div>
    );
};

export default Header;