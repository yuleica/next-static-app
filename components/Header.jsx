import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/styles.module.css';

export const Header = ({home}) => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="row justify-content-start">
            <div className="col-4">
            </div>
            <div className="col-4 mt-5">
              {home ? (
              <>
                  <Image
                    priority
                    src={"/img/logoPolo.jpeg"}
                    height={144}
                    width={144}
                    alt="home"
                    className={styles.img_sociales}
                  />
                </>
                ) : (
                <>
                  <Link href="/">
                    <a className={styles.img_sociales}>
                      <Image
                        priority
                        src={"/img/logoPolo.jpeg"}
                        height={144}
                        width={144}
                        alt="home"
                        className={styles.img_sociales} 
                      />
                    </a>
                  </Link>
                </>
              )}
            </div>
            <div className="col-md-4 mt-5">
                <a  
                  target="_blank" 
                  rel="noreferrer"
                  href="https://www.facebook.com/poloempresarial.odscero" 
                  className="btn-social btn-outline text-center mx-2 mx-lg-1">
                    <Image
                       src={"/img/747957.png"}
                       height={30}
                       width={30} 
                       alt="facebook"
                       className={styles.img_sociales}
                    />   
                </a>
                <a  
                  target="_blank" 
                  rel="noreferrer"
                  href="https://www.instagram.com/odscero/" 
                  className="btn-social btn-outline text-center mx-2 mx-lg-1">
                  <Image
                     src={"/img/1384073.png"}
                     height={30}
                     width={30} 
                     alt="instagram"
                     className={styles.img_sociales}
                  />
                </a>
                <a  
                    target="_blank" 
                    rel="noreferrer"
                    href="https://cl.linkedin.com/company/odscero" 
                    className="btn-social btn-outline text-center mx-2 mx-lg-1">
                    <Image
                       src={"/img/1384072.png"}
                       height={30}
                       width={30} 
                       alt="linkedin"
                       className={styles.img_sociales}
                    />
                </a>
                <a  
                    target="_blank" 
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=56930973055" 
                    className="btn-social btn-outline text-center mx-2 mx-lg-1">
                    <Image
                       src={"/img/3799934.png"}
                       height={30}
                       width={30} 
                       alt="whatsapp"
                       className={styles.img_sociales}
                    />
                </a>
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
            </div>
        </div>
      </div>
    </div>
  )
}




