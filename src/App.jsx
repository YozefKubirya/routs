import { Suspense, lazy } from 'react';
import './App.css'
import { Route,Routes, } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
 
const Home= lazy(()=>import('./pages/Home/Home'))
const About= lazy(()=>import('./pages/About/About'))
const Product= lazy(()=>import('./pages/Product/Product'))
const NotFound= lazy(()=>import('./pages/NotFound/NotFound'))
const ProductDetailes= lazy(()=>import('./pages/ProductDetailes/ProductDetailes'))
const BankInfo= lazy(()=>import('./components/BankInfo/BankInfo'))
const PaymentReceipte= lazy(()=>import('./components/PaymentReceipte/PaymentReceipte'))

function App() {


  return (
    <>
    <Navigation/>
    <Suspense fallback={<>Loading........</>}>
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
    </Suspense>
    </>
  )
}

export default App
