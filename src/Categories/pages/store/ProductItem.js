import React from 'react';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useCart();

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body d-block w-100" style={{backgroundColor:"white",width:"250px"}}>
            <img style={{display: "block", margin: "0 auto 10px", height: "200px",width:"300px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <div style={{height:"30px"}}></div>
            <h5 className="text-center" style={{color:"black"}}>{product.name}</h5>
            <h5 className="text-center"  style={{color:"blue"}}>{formatNumber(product.price)}</h5>
            <br/>
            <div className="text-center" >
                
                
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }
                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-sm" style={{backgroundColor:"#d67efc",color:"black"}}>Add to cart</button>
                }
                
            </div>
        </div>
    );
}

export default ProductItem;