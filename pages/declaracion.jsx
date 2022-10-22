import React from 'react';
import Image from 'next/image';
import Layaout from '../components/Layaout';
import styles from '../styles/styles.module.css';

export default function polo(){
  return (
    <Layaout
      title="Declaración"
      description="declaracion"
    >
      <div className="container">
        <h2 className={styles.h1}>Declaración de Accesibilidad</h2>
        <div className="container px-4 text-justify">
          <div className="p-3 border bg-light rounded-1">
                <p>Polo Empresarial ODS Cero trabajamos por mantener el presente sitio web con las mejores prácticas de accesibilidad 
                  para nuestros visitantes, en particular para organizaciones del territorio de Chile.</p>
                <p>Buscamos implementar los estándares y recomendaciones de W3C Web Accessibility Initiative (WAI). Agradeceremos 
                  a todos nuestros visitantes contactarnos para sugerirnos sus mejoras y observaciones.</p> 
                <p><b>Contacto: web@odscero.org</b></p>
          </div>
        </div>
      </div>
    </Layaout>
  )
}

