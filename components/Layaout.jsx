import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from './Header';
import {Navbar} from './Navbar';
import {Footer} from './Footer';



export default function Layaout({children, title, description, home}) {
  return (
    <div className="container">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <header><Header /></header>
        <Navbar />       
      <main>{children}</main>
        {!home && (
            <div>
                <Link  href="/">
                    <a className="btn btn-outline-secondary border-0">← Ir a Inicio</a>
                </Link>
            </div>
      )}
      <footer className="text-center footer-style"><Footer /></footer>
    </div>
  )
}

Layaout.defaultProps = {
    title: "Mi Sitio Web",
    description: "Sitio web del Polo ODS0"
};

