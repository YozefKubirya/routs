import Paymentcard from "../PaymentCard/PaymentCard";

export default function PaymentsList({payments}){
   return<>
   <ul>
      {payments.map((payment)=>(
         <li key={payment.id}>
            <Paymentcard cardOwner={payment.cardOwner} description={payment.description} amount={payment.amount} id={payment.id}/>
         </li>)
      )}
   </ul>
   </>
}