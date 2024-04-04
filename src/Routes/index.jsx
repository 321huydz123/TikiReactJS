import Home from "../Pages/Home"
import DetailProduct from "../Layout/DetailProduct"
import Detail from "../Pages/Detail"
import CartCheck from "../Pages/CartCheck"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Detail ,layout: DetailProduct},
    { path: '/cart', component: CartCheck , layout: DetailProduct },
]
export { publicRoutes }