import css from '../ProductDetailes/ProductDetalies.module.css'
import { useEffect, useState } from "react";
import { Link, useParams,Outlet } from "react-router-dom"
import { getPaymentById } from "../../payments.Api";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
export default function ProductDetailes(){
   const {productId}=useParams();
   const [payment,setPayment]=useState(null)
   useEffect(()=>{
      async function getPaymentId (){
         const fetchedId= await getPaymentById(productId);
setPayment(fetchedId)
      }
      getPaymentId()
   },[productId])
   return<>
   <h2>Product Detailes</h2>
{payment && <PaymentInfo payment={payment}/>}

<ul className={css.ul}>
   <li className={css.li}><Link to='bankInfo' className={css.link}>Bank Info</Link></li>
   <li className={css.li}><Link to='receipte' className={css.link}>Payment Receipte</Link>
   </li>
</ul>
<Outlet/>
   </>
}
