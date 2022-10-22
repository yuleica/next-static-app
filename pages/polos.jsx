import React from 'react';
import Image from 'next/image';
import Layaout from '../components/Layaout';
import styles from '../styles/styles.module.css';

export default function polo(){
  return (
    <Layaout
      title="Polos Agroecológicos"
      description="polo"
    >
      <div className="container">
        <h2 className={styles.h1}>Cómo lo Hacemos</h2>
        <div className="container px-4 text-justify">
          <div className="row gx-5">
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>PASO 1</h4>
                <p>Nos reunimos para conocernos e idear juntos alguna solución de
                    interés para tu comunidad local.</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>PASO 2</h4>
                <p>Generamos un Plan y comenzamos a trabajar de
                    manera colaborativa.</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="p-3 border bg-light rounded-1">
                <h4 className={styles.h4}>PASO 3</h4>
                <p>Medimos los Progresos e Impactos.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.h1}>Polos en Operación</h2>
        <div className="p-3 border bg-light rounded-1 mb-3">
          <figure>
            <blockquote className="blockquote">
              <h4 className={styles.h4}>PARAISO</h4>
            </blockquote>
            <figcaption className="blockquote-footer">
              Ubicado en <cite title="Source Title">Reserva Cora N° 4. Santa Isabel, Chimbarongo, VI Región.</cite>
            </figcaption>
            <p>Programa de Producción y Comercio Colaborativo. Tiene un alcance a
              más de 2.000 Familias Campesinas. Cuenta con un programa de
              producción agro ecológica de alimentos saludables y cosmética natural.</p>
          </figure>
        </div>
        <div className="row">
          <div className="col">
            <Image
              src={"/img/p1.jpeg"}
              height={2500}
              width={3500} 
              alt="Chimbarongo"
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div className="col">
            <Image
              src={"/img/p2.jpg"}
              height={2500}
              width={3500} 
              alt="Chimbarongo"
              className="img-fluid mx-auto d-block"
            />

          </div>
          <div className="col">
            <Image
              src={"/img/p3.jpeg"}
              height={2500}
              width={3500} 
              alt="Chimbarongo"
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div className="col">
            <Image
              src={"/img/p4.jpeg"}
              height={2500}
              width={3500} 
              alt="Chimbarongo"
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
        <div className="p-3 border bg-light rounded-1 mb-3">
          <figure>
            <blockquote className="blockquote">
              <h4 className={styles.h4}>ECO SANTUARIO BEATA LAURA VICUÑA</h4>
            </blockquote>
            <figcaption className="blockquote-footer">
              Ubicado en <cite title="Source Title">Renca, Región Metropolitana, CHILE.</cite>
            </figcaption>
            <p>Desarrollo de Planta Fotovoltaica. Se creará una Planta de Alimentos
                Saludables, compatible con un espacio de Innovación Social Abierta para nuevos emprendimientos. Desarrollaremos un programa de CrowdCommerce</p>
          </figure>  
        </div>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-4">
              <Image
                src={"/img/beata1.jpg"}
                height={2500}
                width={3500} 
                alt="Santuario"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-4">
              <div className="row">
                <Image
                  src={"/img/beata2.jpg"}
                  height={1000}
                  width={2000} 
                  alt="Santuario"
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="row mt-2">
                <Image
                  src={"/img/beata3.jpg"}
                  height={1000}
                  width={2000} 
                  alt="Santuario"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-4">
              <Image
                src={"/img/beata4.jpg"}
                height={2500}
                width={3500} 
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

