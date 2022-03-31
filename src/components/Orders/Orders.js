import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../useCart/useCart';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products)
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(product=><OrderReview
                        key = {product.id}
                        product= {product}
                    ></OrderReview>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
           

        </div>
    );
};

export default Orders;