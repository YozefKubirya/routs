import { Link, useLocation } from "react-router-dom";
import css from '../PaymentCard/PaymentCard.module.css'
export default function Paymentcard ({cardOwner,amount,description,id}){
const location =useLocation();
console.log(location)
   return <>
<div>
<p>Card Owner: {cardOwner}</p>
<p>Amount: {amount}</p>
<p>Description: {description}</p>
<Link to={`/product/${id}`} className={css.detaliesLink} state={location}>Detailes</Link>
</div>
      </>
}