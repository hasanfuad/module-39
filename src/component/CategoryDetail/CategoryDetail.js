import React from 'react';

const CategoryDetail = (props) => {
    const {increase} = props;
    return (
        <div>
            <h4>Select your category has: {increase}</h4>
        </div>
    );
};

export default CategoryDetail;