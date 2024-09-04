
import './App.css'
import { Route,Routes, } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home' 
import About from './pages/About/About'
import Product from './pages/Product/Product'
import NotFound from './pages/NotFound/NotFound'
import ProductDetailes from './pages/ProductDetailes/ProductDetailes'
import BankInfo from './components/BankInfo/BankInfo'
import PaymentReceipte from './components/PaymentReceipte/PaymentReceipte'
function App() {


  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<ProductDetailes/>}>
   
      <Route path='bankInfo' element={<BankInfo/>}/>
      <Route path='receipte' element={<PaymentReceipte/>}/>
      
      </Route>
      <Route path='*' element={<NotFound/>}/>
     
    </Routes>  
    </>
  )
}

export default App
