import Layaout from "../components/Layaout";
import Image from "next/image";
import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <div className="container mt-25">
      <Layaout
        title="Polo ODS0"
        description="Home"
        home={true}
      >
        <section className={styles.wrapper}>

          <div className="card" >
                <div className="card-body">
                  <div className="col-4">
                    <Image
                      src={"/img/Mariposa2.png"}
                      height={2500}
                      width={3500} 
                      alt="Mariposa"
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <h4 className="text-center">49</h4>
                  <p className="card-text"> Familias Cooperadas</p>
                </div>
          </div>
          <div className="card mb-2" >
                <div className="card-body center">
                  <h4 className="text-center">14</h4> 
                  <p className="card-text">Organismos Miembros del Polo Empresarial ODS0</p>
                </div>
          </div>
          <div className="card mb-2">
                <div className="card-body">
                  <h4 className="text-center">11</h4>
                  <p className="card-text"> Colaboradores Técnicos y Profesionales nos ayudan en nuestro quehacer</p>
                </div>
          </div>
          <div className="card mb-2">
                <div className="card-body">
                  <h4 className="text-center">50.000</h4>
                  <p className="card-text"> Familias se verán impactadas por los programas que desarrollamos en la actualidad</p>
                </div>
          </div>               
          <div className="card mb-2">
                  <Image
                    src={"/img/Abejas.png"}
                    height={434}
                    width={1000} 
                    alt="Abejas"
                  /> 
                <div className="card-body">
                  <h4 className="text-center">M$30.000</h4>
                  <p className="card-text">A la fecha nuestros socios cooperados han invertido más de 30 millones de pesos.</p>
                </div>
          </div>
          <div className="card mb-2">
                <div className="card-body">
                  <h4 className="text-center">MUSD 11.000</h4>
                  <p className="card-text">Actualmente nos encontramos gestionando más de 11 millones de dólares para el crecimiento.</p>                </div>
          </div>
        </section>
        <div className="container px-4 text-justify">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 border bg-light rounded-1">
                <p className={styles.p}><b>Cooperación, Innovación e Ingeniería para la Sostenibilidad y el Buen Vivir Local.</b> 
                 Somos un Polo Empresarial que agrupa a asociaciones empresariales, empresas cooperativas, sociedades
                comerciales, ongs y fundaciones.</p>
                <p className={styles.p}><b>Trabajamos</b> en conjunto a comunidades locales y a inversionistas de impacto, para crear las condiciones que
                permitan la sostenibilidad local.</p>
              </div>
            </div>
            <div className="col">
                <div className="p-3 border bg-light rounded-1">
                <p><b>Desarrollamos iniciativas en:</b></p>
                  <p className={styles.pOb3}> ODS 03 | Alimentos Saludables y Cosmética Natural.</p>
                  <p className={styles.pOb7}> ODS 07 | Energías Renovables No Convencionales y Tecnologías Limpias.</p>
                  <p className={styles.pOb9}> ODS 09 | Bienes Muebles Ecológicos.</p>
                  <p className={styles.pOb12}> ODS 12 | Comercio Electrónico de tipo CrowdCommerce.</p>
                  <p className={styles.pOb17}> ODS 17 | Capitales de Riesgo bajo estándar ESG</p>                </div>
            </div>
          </div>
        </div>
      </Layaout>
    </div>
  )
}


