import React from 'react';
import Image from 'next/image';
import styles from '../styles/styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="row row-fluid">
        <hr />
            <div className="col-md-4 footer-col">
                <Image
                  src={"/img/LogoCoop.jpg"}
                  height={150}
                  width={250} 
                  alt="LogoCoop"
                  className={styles.img_sociales}
                /> 
            </div>
            <div className="col-md-4 footer-col">
                <p><b>Nuestras Redes</b></p>
                <ul className="list-inline">
                    <li>
                        <a  
                          target="_blank" 
                          rel="noreferrer"
                          href="https://www.facebook.com/poloempresarial.odscero" 
                          className="btn-social btn-outline">
                          <Image
                            src={"/img/747957.png"}
                            height={30}
                            width={30} 
                            alt="facebook"
                            className={styles.img_sociales}
                          />   
                        </a>
                    </li>
                    <li>
                        <a  
                          target="_blank" 
                          rel="noreferrer"
                          href="https://www.instagram.com/odscero/" 
                          className="btn-social btn-outline">
                          <Image
                            src={"/img/1384073.png"}
                            height={30}
                            width={30} 
                            alt="instagram"
                            className={styles.img_sociales}
                          />
                        </a>
                    </li>
                    <li>
                      <a  target="_blank" 
                          rel="noreferrer"
                          href="https://cl.linkedin.com/company/odscero" 
                          className="btn-social btn-outline">
                         <Image
                            src={"/img/1384072.png"}
                            height={30}
                            width={30} 
                            alt="linkedin"
                            className={styles.img_sociales}
                          />
                      </a>
                    </li>
                    <li>
                        <a  
                          target="_blank" 
                          rel="noreferrer"
                          href="https://api.whatsapp.com/send?phone=56930973055" 
                          className="btn-social btn-outline">
                          <Image
                            src={"/img/3799934.png"}
                            height={30}
                            width={30} 
                            alt="whatsapp"
                            className={styles.img_sociales}
                          />
                        </a>
                    </li>
                    <li>
                        <a  
                          target="_blank" 
                          rel="noreferrer"
                          href="https://odscero.tumblr.com" 
                          className="btn-social btn-outline text-center mx-2 mx-lg-1">
                          <Image
                            src={"/img/tumblr.png"}
                            height={30}
                            width={30} 
                            alt="tumblr"
                            className={styles.img_sociales}
                          />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-md-4 footer-col">
              <p><b>Dirección</b></p>
              <p>Las Palmas 355, Locales 3 y 4, Peñalolén, Santiago de Chile.</p>
              <p><b>Contacto: </b>web@odscero.org</p> 
              <p>© 2022. Todos los contenidos de este sitio son Derechos
                  Reservados de Fundación Polo Empresarial ODS Cero.</p>
              <p>
                <a
                  target="_blank" 
                  rel="noreferrer"
                  href="/declaracion" 
                  className="btn-social">
                  DECLARACIÓN DE ACCESIBILIDAD</a> | 
                <a
                  target="_blank" 
                  rel="noreferrer"
                  href="/politicas" 
                  className="btn-social">
                  POLÍTICAS DE PRIVACIDAD</a> 
              </p>
            </div>
        <hr />
      </div>
    </div>


  )
}




