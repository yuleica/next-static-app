import React from 'react';
import Link from 'next/link';
import styles from "../styles/styles.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar_backg}>
        <nav className="navbar navbar-expand-lg navbar-dark rounded-start rounded-end mb-3">
          <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link href="/"><a className="nav-link">ACCIONES MÁS QUE PALABRAS</a></Link>
                </li>
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link href="/polos">
                    <a className="nav-link">POLOS AGROECOLÓGICOS & BUEN VIVIR LOCAL</a>
                  </Link>
                </li>
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link href="/colaborativa">
                    <a className="nav-link center">INVERSIÓN COLABORATIVA</a>
                  </Link>
                </li>
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link href="/cooperativizate">
                    <a className="nav-link">COOPERATIVIZATE</a>
                  </Link>
                </li>
                <li className="nav-item text-center mx-2 mx-lg-1">
                  <Link href="/nosotros">
                    <a className="nav-link center">NUESTRA INSTITUCIÓN Y GOBIERNO CORPORATIVO  </a>
                  </Link>  
                </li>
              </ul>
          </div>
        </nav>
    </div>
  )
}
