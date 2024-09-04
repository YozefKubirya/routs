import Paymentcard from "../PaymentCard/PaymentCard";
import css from '../PaymentsList/PaymentsList.module.css'
export default function PaymentsList({payments}){
   return<>
   <ul className={css.list}>
      {payments.map((payment)=>(
         <li key={payment.id} className={css.li}>
            <Paymentcard cardOwner={payment.cardOwner} description={payment.description} amount={payment.amount} id={payment.id}/>
         </li>)
      )}
   </ul>
   </>
}