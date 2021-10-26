import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        fetch(`http://localhost:9000/products/byKeys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savedCart),
        }).then(res => res.json()).then(data =>
            console.log(data));
        // if (products.length) {
        //     const storedCart = [];
        //     for (const key in savedCart) {
        //         const addedProduct = products.find(product => product.key === key);
        //         if (addedProduct) {
        //             // set quantity
        //             const quantity = savedCart[key];
        //             addedProduct.quantity = quantity;
        //             storedCart.push(addedProduct);
        //         }
        //     }
        //     setCart(storedCart);
        // }

    }, []);

    return [cart, setCart];
}

export default useCart;