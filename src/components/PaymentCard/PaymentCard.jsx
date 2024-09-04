import { Link } from "react-router-dom";
import css from '../PaymentCard/PaymentCard.module.css'
export default function Paymentcard ({cardOwner,amount,description,id}){

   return <>
<div>
<p>Card Owner: {cardOwner}</p>
<p>Amount: {amount}</p>
<p>Description: {description}</p>
<Link to={`/product/${id}`} className={css.detaliesLink}>Detailes</Link>
</div>
      </>
}