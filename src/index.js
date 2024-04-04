import React from 'react';
import "tw-elements-react/dist/css/tw-elements-react.min.css"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './Contexts/productContext';
import CategoryProvider from './Contexts/categoryContext';
import CartProvider from './Contexts/cartContext';
ReactDOM.createRoot(document.getElementById('root')).render(
                <CartProvider>
                            <CategoryProvider>
                                <ProductProvider>
                                    <App />
                                </ProductProvider>
                            </CategoryProvider>
                </CartProvider>
);
