import React from 'react';
import Header from '../Default/Header'
import Footer from '../Default/Footer';
const DetailLayout = ({ children }) => {
    return (
        <div className="h-100vh">
            <Header />
            <div className="h-fit">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DetailLayout