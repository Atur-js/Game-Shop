import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './Games/contexts/ProductsContext';
import CartContextProvider from './Games/contexts/CartContext';
import ProductsContextProviderSw from './Categories/contexts/ProductsContext';
import CartContextProviderSw from './Categories/contexts/CartContext';

ReactDOM.render(
  <HelmetProvider>
      <ProductsContextProvider>
        <ProductsContextProviderSw>
          <CartContextProvider>
            <CartContextProviderSw>
              <App />
            </CartContextProviderSw>
        </CartContextProvider>
        </ProductsContextProviderSw>
      </ProductsContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);
