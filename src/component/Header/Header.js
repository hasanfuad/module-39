import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>Number:{category}</h1>
            <button onClick={()=>setCategory(category+1)}>Increase</button>
        </div>
    );
};

export default Header;