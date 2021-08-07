import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>Shipment:{category}</h1>
        </div>
    );
};

export default Shipment;