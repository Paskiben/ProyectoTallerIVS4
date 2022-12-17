import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

export async function search(edificio) {
  let instance = await (await fetch(`data/instancias.json`)).json();
  console.log(instance);
}




const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Glassroom</title>
        <link rel="icon" href="/kumble.ico" />
      </Head>

      <main>
        <Button
          onClick={void search()}>
          busqueda
        </Button>

        <Image
          src="/images/eye.png"
          height={294} // Desired size with correct aspect ratio
          width={470} // Desired size with correct aspect ratio
          alt="ojo"
        />

        <h1 className="title">¿Cómo ha sido tu semana?</h1>

        <p className="description">
          Este código está en <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link
            href={{
              pathname: "/response",
              query: { opt: 0 },
            }}
          >
            <a className="card">Excelente!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 1 },
            }}
          >
            <a className="card">Más o menos no mas!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 2 },
            }}
          >
            <a className="card">Horrible! :(</a>
          </Link>
        </div>
      </main>

      <footer>
        <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          Repositorio y tutorial
        </a>
        &nbsp;-&nbsp;
        <Link href="/about">
          <a>Sobre esta página</a>
        </Link>
      </footer>
    </div>
  );
};

export default Index;