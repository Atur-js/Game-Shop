
import React, { useContext } from 'react';
import { CartTwoContext } from '../contexts/CartContext';

export const useCart = () => {
   
    const ctx = useContext(CartTwoContext)

    return {
        ...ctx
    }
}