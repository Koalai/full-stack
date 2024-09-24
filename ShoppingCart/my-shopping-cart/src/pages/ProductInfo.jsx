import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { productContext, cartContext } from "../components/context/productContext";
import { useContext, useEffect, useState } from "react";
import "../styles/ProductInfo.css";

export const ProductInfo = () => {
  const products = useContext(productContext);
  const { setCart } = useContext(cartContext);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  // Tìm sản phẩm dựa trên ID
  const product = products.find((p) => p.id === parseInt(productId));


  const recommendedProduct = products.filter((p) => p.category === product.category);


  useEffect(() => {
    if (products.length > 0) {
        setLoading(false);
    }
  }, [products])
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const addProductToCart = () => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (!existingProduct) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="productInfoContainer">
      <div className="nav">
        <p>
          <Link to="/home">Home</Link>&#10148;
          <Link to="/shop">Shop</Link>&#10148; &nbsp;{product.title}
        </p>
      </div>

      <div className="productInfo">
        <div className="imgSection">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="productDetail">
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <button onClick={addProductToCart}>ADD TO CART</button>
        </div>
      </div>
      <div className="productRec">
        <h3>Product you may like</h3>
        <hr />
        <Carousel responsive={responsive} className="carousel" itemClass="carouselItem">
          {recommendedProduct.map(rec => {
            return (
                <div key={rec.id} className="recProduct">
                    <Link to={`/productInfo/${rec.id}`}>
                        <div className="recImg">
                            <img src={rec.image}></img>
                        </div>
                    </Link>
                        <div className="recInfo">
                            <h4>{rec.title}</h4>
                            <p>${rec.price}</p>
                        </div>
                </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  );
};



ProductInfo.propTypes = {
  product: PropTypes.node,
}