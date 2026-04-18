import { Route, Link, Routes } from 'react-router-dom'
import Navbar from './assets/myPages/Navbar'
import Home from './assets/myPages/Home'
import Cart from './assets/myPages/Cart'
import Auth from './assets/myPages/Auth'
import { ModeProvider } from './assets/Context/ModeContext'
import AuthProvider from './assets/Context/AuthContext'
import ProductDetail from './assets/myPages/ProductDetails'
import { CartProvider } from './assets/Context/CartContext'

import './App.css'

function App() {

  return (

    <AuthProvider>
      <CartProvider>
        <ModeProvider>
          <Navbar />
          <div className="containet sm:mx-[12%] mx-[6%]">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/products/:id' element={<ProductDetail />} />
            </Routes>
          </div>
        </ModeProvider>
      </CartProvider >

    </AuthProvider>

  )
}
export default App;

