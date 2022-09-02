import React from 'react';
import Image from 'next/image';
import Layaout from '../../components/Layaout';

export default function primerPost({data}) {
  return (
    <div>
        <Layaout
            title="Posts"
            description="Mis Posts"
          >
          <h1>{data.id} - {data.title}</h1>
          <p>{data.body}</p>
          <Image
              src={"/img/1.jpg"}
              width={1600}
              height={900}
              alt="Fotos antiguas"
          ></Image>

        </Layaout>
    </div>
  )
}

//obtengo los ids del array
//getStaticPaths --> rutas(paths) dinámmicas
//fallback genera el 404 automáticamente
export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

//renderiza del lado del servidor + el id del paths
export async function getStaticProps ({params}) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await res.json();
    return{
      props: {data}
    };
  } catch (error) {
    console.log(error)
    
  }
};

