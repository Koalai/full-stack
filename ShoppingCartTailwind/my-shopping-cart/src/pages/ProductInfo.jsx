import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { productContext, cartContext } from "../components/context/productContext";
import { useContext, useEffect, useState } from "react";

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
    <div className="flex flex-col flex-1 text-slate-500 font-semibold">
      <div className="mt-3 ml-24 text-lg ">
        <p>
          <Link to="/home">Home</Link> &#10148;
          <Link to="/shop"> Shop</Link> &#10148; &nbsp;{product.title}
        </p>
      </div>

      <div className="flex items-center w-4/6 ml-24 gap-10">
        <div className="w-5/6 mt-12">
          <img src={product.image} alt={product.title} className="object-contain"/>
        </div>
        <div className="text-xl flex flex-col gap-3 items-start">
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <button className="bg-slate-500 text-white px-2 py-2 rounded-md hover:text-stone-200 hover:bg-black" onClick={addProductToCart}>ADD TO CART</button>
        </div>
      </div>
      <div className="flex flex-col mt-12 ml-12 text-xl">
        <h3>Product you may like</h3>
        <hr />
        <Carousel
    responsive={responsive}
    className="my-20 mx-auto w-4/5"
    itemClass="flex justify-center"
>
    {recommendedProduct.map(rec => {
        return (
            <div key={rec.id} className="bg-white shadow-xl  rounded-lg flex flex-col items-center p-4 w-4/5">
                <Link to={`/productInfo/${rec.id}`}>
                    <div className="mb-4">
                        <img src={rec.image} alt={rec.title} className="w-60 h-60 object-contain " />
                    </div>
                </Link>
                <div className="recInfo text-center">
                    <h4 className="text-lg font-semibold mb-1">{rec.title}</h4>
                    <p className="text-gray-700">${rec.price}</p>
                </div>
            </div>
        );
    })}
</Carousel>

      </div>
    </div>
  );
};



ProductInfo.propTypes = {
  product: PropTypes.node,
}