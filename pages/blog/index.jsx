import React from 'react';
import Layaout from '../../components/Layaout';
import Link from 'next/link';

export default function index({data}){
  return (
    <div>
        <Layaout
          title="Lista de post escritos por mi"
          description="descripcion de posts"
        >
          <h1>Lista de artículos</h1>
          {data.map(({ id, title, body }) => (
            <div key={id}>
              <h3>
                <Link href={`/blog/${id}`}>
                  <a>
                    {id} - {title}
                  </a>
                </Link>
              </h3>
              <p>{body}</p>
            </div>
          ))}
        </Layaout>
    </div>
  )
};

//rederiza del lado del servidor
export async function getStaticProps () {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return{
      props: {data}
    }
  } catch (error) {
    console.log(error)
    
  }
};
