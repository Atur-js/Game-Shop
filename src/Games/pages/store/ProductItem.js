import React from 'react';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useCart();

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body d-block w-100" style={{backgroundColor:"#2160c4",width:"250px"}}>
            <img style={{display: "block", margin: "0 auto 10px", height: "200px",width:"150px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <div style={{height:"30px"}}></div>
            <p className="text-center" style={{color:"white"}}>{product.name}</p>
            <h3 className="text-center"  style={{color:"#54f0ff"}}>{formatNumber(product.price)}</h3>
            <br/>
            <div className="text-center" >
                <a href={product.address} style={{color:"white",textDecoration:"none"}} className="btn btn-link btn-sm mr-2">Details</a>
                
                
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-light btn-sm">Add more</button>
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