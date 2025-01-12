'use client'
import { Link } from "react-scroll"
import styles from './navbar.module.css'
import { Kdam_Thmor_Pro } from "next/font/google"
import React, { useState } from "react";

const thmor = Kdam_Thmor_Pro({
  subsets: ['latin'],
  weight: '400',
});

export const NavBar = () =>{
  const [activeIndex, setActiveIndex] = useState(0); // Track the active menu item
  const menuItems = ["HOME", "ABOUT", "DOCUMENTATION", "CONTACT"];
  const menuPaths = ["home", "about", "documentation", "contact"];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${
              activeIndex === index ? styles.active : ""
            } ${thmor.className}`}
          >
            <Link to={menuPaths[index]} smooth={true} onClick={() => setActiveIndex(index)}>
              {item}
              <div
                className={styles.indicator}
                style={{
                  width: activeIndex === index ? "100%" : "0%",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}