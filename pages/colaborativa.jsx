import React from 'react';
import Image from 'next/image';
import Layaout from '../components/Layaout';
import styles from '../styles/styles.module.css';

export default function colaborativa(){
  return (
    <Layaout
      title="Inversión Colaborativa"
      description="inversión"
    >
      <div className="container">
        <div className="container px-4 text-justify">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 border bg-light rounded-1 mb-3">
                  <p className={styles.h4}>CÓMO LO HACEMOS</p>
                  <p className={styles.p}>Sumándote como Inversionista con amigos o familia como
                    “Comunidad de Inversión para el Buen Vivir”, siendo los aportantes
                    socios de Cooperativa de Servicios CIBV Ltda. en proceso de
                    formación.</p>
                  <p className={styles.h4}>RENTABILIDAD</p>
                  <p className={styles.p}>Si bien no garantizamos rentabilidades, los riesgos son bajos y la
                    inversión se realiza en activos energéticos, bienes y servicios sostenibles
                    que introducimos al mercado.</p>
                  <p className={styles.p}>Estamos destinando de las ventas, desde un 5% a un 20% de
                    rentabilidad anual asociado a los capitales de riesgo, con retiros
                    cuatrimestrales</p>
                  <p className={styles.h4}>RESCATE DEL CAPITAL</p>
                  <p className={styles.p}>El rescate del capital requiere de el cierre de un proceso cuatrimestral,
                    bajo las regulaciones de la Ley General de Cooperativas y bajo la
                    fiscalización del Ministerio de Economía, Fomento y Turismo de Chile.</p>
              </div>

            </div>

            <div className="col">
                <Image
                  src={"/img/inversion.jpg"}
                  height={2500}
                  width={3500} 
                  alt="Inversion Colaborativa"
                  className="col-md-6 float-md-end mb-3 ms-md-3"
                />
            </div>

          </div>
        </div>
      </div>
    </Layaout>
  )
}



