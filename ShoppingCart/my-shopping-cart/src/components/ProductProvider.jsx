import { useState, useEffect, createContext } from "react";
import { productContext } from "./context/productContext";
import PropTypes from "prop-types";


// use createContext to pass the props through child component easier

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {mode: "cors"})
            .then(res=>res.json())
            .then(json => setProducts(json))
            .catch(error => console.error("Error when fetching products", error));
    }, [])

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