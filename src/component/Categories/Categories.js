import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{bName: "Asus", category: "Laptop"},{bName: "MSI", category: "Laptop"},{bName: "Lenovo", Category: "Laptop"},
                    {bName: "iPhone", category: "Mobile"},{bName: "Xiaomi", category: "Mobile"},{bName: "Samsung", Category: "Mobile"},
                    {bName: "Nikon", category: "Camera"},{bName: "Canon", category: "Camera"},{bName: "Sony", Category: "Camera"}
                ]

const Categories = () => {
    const [category] = useContext(CategoryContext);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
           const matchProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
           setProducts(matchProducts);
    },[category])
    return (
        <div>
            <h2>This Categories{category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}/>)
            }
        </div>
    );
};

export default Categories;