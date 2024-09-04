import { useEffect, useState } from "react"
import { getPayments } from "../../payments.Api"
import PaymentsList from "../../components/PaymentsList/PaymentsList";
import css from '../Product/Product.module.css'
export default function Product (){
   const [payments,setPayments]=useState([])

   useEffect(()=>{
async function getData(){
const fetchedData= await getPayments(payments);
setPayments(fetchedData);
}
getData()
   },[payments])
   return <>
   <h2 className={css.productHeader}>This is our product</h2>
   <PaymentsList payments={payments}/>
   </>
}