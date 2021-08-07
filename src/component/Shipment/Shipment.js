import React from 'react';

const Shipment = (props) => {
    const {increase} = props;
    return (
        <div>
            <h1>Shipment:{increase}</h1>
        </div>
    );
};

export default Shipment;