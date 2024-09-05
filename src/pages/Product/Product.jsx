import { useEffect, useState } from "react"
import { getPayments } from "../../payments.Api"
import PaymentsList from "../../components/PaymentsList/PaymentsList";
import css from '../Product/Product.module.css'
import OwnerForm from "../../components/OwnerForm/OwnerForm";
import { useSearchParams } from "react-router-dom";
export default function Product (){
   const [payments,setPayments]=useState([])
   const [params]=useSearchParams();
   const owner=params.get('owner') ?? "";
useEffect(()=>{
async function getData(){
const fetchedData= await getPayments(owner);
setPayments(fetchedData);
}
getData()
   },[owner])
   return <>
   <h2 className={css.productHeader}>This is our product</h2>
   <OwnerForm/>
   {payments.length>0 &&   <PaymentsList payments={payments}/>}
 
   </>
}