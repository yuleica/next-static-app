import React from 'react';
import Image from 'next/image';
import Layaout from '../components/Layaout';
import styles from '../styles/styles.module.css';
export default function somos(){
  return (
    <Layaout
      title="Nosotros"
      description="Nuestra Institución"
    >
      <div className="container">
        <div className="container px-4 text-justify">
          <div className="row gx-5">
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>QUIÉNES SOMOS</h4>
                <p className={styles.p}>Somos un polo empresarial compuesto por gremios, cooperativas, sociedades comerciales,
                  fundaciones y ongs.</p>
                <p className={styles.p}>Sembramos y cultivamos la cooperación, innovación e ingeniería, para el buen vivir y
                  desarrollo sostenible local de comunidades, en los mercados en los cuales operamos.</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>GOBIERNO CORPORATIVO</h4>
                <p className={styles.p}>El 16 de noviembre de 2021 se constituye Fundación Polo
                  Empresarial ODS Cero.</p> 
                <p className={styles.p}>Operamos como Instituto Auxiliar
                  Cooperativo conforme al artículo 104 de la Ley General de
                  Cooperativas y bajo la supervisión del Ministerio de Economía
                  de Chile.</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>NUESTRA DIRECTIVA</h4>
                <p><b>Presidencia:</b> Claudia Berardi Cáceres</p>
                <p><b>Vicepresidencia:</b> Juan Jaime Olguín de la Huerta</p>
                <p><b>Secretaría:</b> Gislaine Duforcq y Francisca Zuñiga</p>
                <p><b>Tesorería:</b> Marcelo Araya Barrientos</p>
                <p><b>Dirección Comercial:</b> Erick Macaya</p>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Image
                src={"/img/nosotros1.jpg"}
                height={3500}
                width={6500} 
                alt="Nosotros"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-4">
              <Image
                src={"/img/nosotros3.jpg"}
                height={4000}
                width={6000} 
                alt="Nosotros"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-4">
              <Image
                src={"/img/pizarra.jpg"}
                height={3500}
                width={6500} 
                alt="Nosotros"
                className="img-fluid mx-auto d-block"
              />
            </div>
        </div>
          <div className="row gx-5 mt-5">
            <div className="col">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>MODELO DE BUEN VIVIR LOCAL</h4>
                <p className={styles.p}>Nuestro modelo de desarrollo sostenible, se enfoca a las
                  comunidades locales. Compatibilizan con nuestro quehacer
                  operativo a modo de Inversión e Innovación Social, con lo cual apoyamos el Desarrollo Sostenible Local, de manera
                  transversal a las empresas cooperativas del Polo ODS Cero.</p>
                <p className={styles.p}>Los datos de estos programas, exponen su desarrollo y
                  desempeño (procesos auditados), en una plataforma Open
                  Data (en construcción), y se monitorean indicadores de cuatro dimensiones: buen vivir, ecológica, económica y social.</p>
              </div>
            </div>
          </div>
          <div className="row gx-5 mt-5">
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>PRINCIPIOS Y VALORES</h4>
                <ul>
                  <li>Desarrollo Sostenible Local mediante, CrowdCommerce,
                    Ingeniería y Tecnologías Limpias.</li>
                  <li>Buen Vivir, Cooperación Intra e Inter Comunitaria.</li>  
                  <li>Innovación Social Abierta.</li>
                  <li>Adhesión a los Principios Internacionales Cooperativos.</li>
                  <li>Democratización, Participación Civil Activa y Accesibilidad. [*]</li>
                  <li>Quehacer Intra e Inter Comunitario</li>
                </ul>
                <figure>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">[*] : Proceso de desarrollo de las instituciones sociales, que
                        conducen al fortalecimiento de la sociedad civil, resguardo de los
                        Derechos Humanos básicos, y la disminución de desigualdades
                        socio económicas.</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Image
                src={"/img/nosotros2.jpg"}
                height={4000}
                width={5000} 
                alt="Santuario"
                className="img-fluid mx-auto d-block"
              />
            </div>
           
          </div>
        </div>
      </div>
    </Layaout>
  )
}

