import { useState, useEffect} from "react";
import { productContext } from "./context/productContext";
import PropTypes from "prop-types";


// use createContext to pass the props through child component easier

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products')
        return savedProducts ? JSON.parse(savedProducts) : []
    })

    useEffect(() => {
        if (products.length === 0) {
            fetch('https://fakestoreapi.com/products', { mode: "cors" })
                .then(res => res.json())
                .then(json => {
                    setProducts(json);
                    localStorage.setItem('products', JSON.stringify(json)); // Lưu dữ liệu vào localStorage
                })
                .catch(error => console.error("Error when fetching products", error));
        }
    }, [products])

    return (
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    )
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductProvider