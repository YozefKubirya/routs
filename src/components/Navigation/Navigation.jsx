import { NavLink } from "react-router-dom"
import css from '../Navigation/Navigation.module.css'
export default function Navigation (){
   return <>
   <nav className={css.nav}>

     <NavLink to='/' className={css.navLink}>Home</NavLink>
     <NavLink to='/about' className={css.navLink}>About</NavLink>
     <NavLink to='/product' className={css.navLink}>Product</NavLink>
    </nav>
   </>
} 