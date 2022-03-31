import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import useCart from '../../useCart/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products)

    const handleRemoveProduct=(product)=>{
        console.log(product)
        const rest = cart.filter(pd=>pd.id!==product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-review-container">
                {
                    cart.map(product=><OrderReview
                        key = {product.id}
                        product= {product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></OrderReview>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>proceed checkout</button>
                    </Link>
                </Cart>

            </div>
           

        </div>
    );
};

export default Orders;