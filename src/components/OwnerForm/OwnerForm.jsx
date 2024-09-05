import { useSearchParams } from "react-router-dom";

export default function OwnerForm (){
const [params,setParams]=useSearchParams()
// console.log(params)
const handleForm=(e)=>{
e.preventDefault();
const form=e.target;
params.set('owner',form.elements.owner.value);
// console.log(params);
setParams(params);
e.target.reset();
   }
   return<>
   <h2>Search payment card what you need</h2>
   <form onSubmit={handleForm}>
      <input type="text" name="owner"  />
      <button type="submit">search</button>
   </form>
   </>
}