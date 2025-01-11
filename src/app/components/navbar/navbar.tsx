'use client'
import { Link } from "react-scroll"
import styles from './navbar.module.css'
import { Kdam_Thmor_Pro } from "next/font/google"

const thmor = Kdam_Thmor_Pro({
  subsets: ['latin'],
  weight: '400',
});

export const NavBar = () =>{
    return (
       <nav className={`${styles.navbar}`}>
            <ul className={`${styles.list}`}>
                <li className={thmor.className}><Link to='home' smooth={true}>HOME</Link></li>
                <li className={thmor.className}><Link to='about'smooth={true}>ABOUT</Link></li>
                <li className={thmor.className}><Link to='documentation'smooth={true}>DOCUMENTATION</Link></li>
                <li className={thmor.className}><Link to='contact'smooth={true}>CONTACT</Link></li>
                <div className={styles.indicator}></div>
            </ul>
       </nav>
    )
    
}