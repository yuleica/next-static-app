import React from 'react';
import Image from 'next/image';
import Layaout from '../components/Layaout';
import styles from '../styles/styles.module.css';

export default function coop(){
  return (
    <Layaout
    title="Cooperativizate"
    description="polo"
  >
    <div className="container">
      <h2 className={styles.h1}>LAS COOPERATIVAS Y ASOCIACIONES GREMIALES SON</h2>
      <div className="row gx-5">
        <div className="col">
            <div className="p-3 border bg-light rounded-1 mb-5">
              <h4 className={styles.h4}>EMPRESAS DE BIENESTAR</h4>
              <p className={styles.p}>Desarrollamos una actividad productiva, en todos los sectores de la
                  economía. Dependiendo de su rubro es el tipo de cooperativa que se
                  constituye bajo la supervisión del Ministerio de Economía. Los
                  beneficios obtenidos son empleados en acciones de bienestar de los
                  socios cooperados. Su intención es servir a las necesidades y
                  aspiraciones económicas, sociales, ambientales y culturales comunes
                  a todos los socios mediante una empresa.</p>
              <h4 className={styles.h4}>SOCIEDADES PATRIMONIALES</h4>
              <p className={styles.p}>Las empresas cooperativas y asociaciones gremiales, son sociedades
                  patrimoniales, dado que el capital se emplea para el desarrollo de un
                  patrimonio que sostenga la vida y propósito de la sociedad, generando a la vez, un legado hereditario.</p>
              <h4 className={styles.h4}>ORGANISMOS DEMOCRÁTICOS</h4>
              <p className={styles.p}>La máxima instancia de estos organismos son sus asambleas, en cuyas instancias opera por ley de asociaciones gremiales y ley general de cooperativas, la regla de “un socio un voto”, independiente de los aportes de capitales mediante cuotas de participación.</p>
              <h4 className={styles.h4}>LAS COOPERATIVAS HAN CREADO UNA RED MUNDIAL DESDE 1844</h4>
              <p className={styles.p}>Las empresas cooperativas generan más del 10% del PIB Mundial, y son
                las responsables de más del 10% de empleo global. Existe una
                permanente colaboración sectorial entre asociaciones empresariales y
                empresas cooperativas.
              </p> 
            </div>
        </div>
        <div className="col">
          <Image
            src={"/img/Foto3.jpg"}
            height={1000}
            width={2000} 
            alt="Cooperativas"
            className="col-md-6 float-md-end mb-3 ms-md-3"
          /> 
        </div>
      </div>
        <div className="p-3 border bg-light rounded-1 mb-5">
          <h4 className={styles.h4}>ORGANISMOS QUE PARTICIPAN EN POLO EMPRESARIAL ODS CERO</h4>
          <div className="row gx-5">
            <div className="col">
              <ul>
                <li className={styles.li_coop}>Coopertiva de Trabajo Hub Ispirare Ltda</li>
                <li className={styles.li_coop}>Cooperativa de Trabajo Origami Ltda</li>
                <li className={styles.li_coop}>Cooperativa de Trabajo PewenLab Ltda</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className={styles.li_coop}>Cooperativa de Servicios CIBV Ltda</li>
                <li className={styles.li_coop}>AWMA Alimentos Saludables Spa</li>
                <li className={styles.li_coop}>RUTA Sostenible Spa</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className={styles.li_coop}>Fundación Polo Empresarial ODS Cero</li>
                <li className={styles.li_coop}>ASIT Asociación de Sostenibilidad para la Inclusión Tecnológica ag</li>
                <li className={styles.li_coop}>GE+ Confederación Americana de Empresas Sostenibles</li>
              </ul>
            </div>
          </div>
          
        </div>
    </div>
    
    
  </Layaout>

  )
}

