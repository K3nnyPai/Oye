import { useEffect, useState } from "react";

export default function Canciones() {
  const [canciones, setCanciones] = useState([]);
  const [search, setsearch] = useState("");

  //funcion para traer los datos
  const getSongs = () => {
    fetch("json/datos.json")
      .then((response) => response.json())
      .then((datos) => {
        setCanciones(datos.Api_Canciones);
      });
  };

  //funcion de busqueda
  function searcher(e) {
    setsearch(e.target.value);
  }

  //metodo de filtrado
  let results = [];
  if (!search) {
    results = canciones;
  } else {
    results = canciones.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()) ||
      dato.ruta.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-left mt-4">Canciones</h2>
        <input
          className="form-control me-2 mt-4"
          value={search}
          onChange={searcher}
          type="search"
          placeholder="Buscar"
          aria-label="Search"
        />
        <hr />
        <div className="col-12 mt-4 mb-4">
          <div className="row">
            {results.map((item, index) => (
              <span key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card text-dark bg-light ml-3 mb-3">
                  <img
                    src={require(`../../public/imagenes/${item.icono}`)}
                    className="card-img-top center-icono"
                    alt="img"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.nombre}</h5>
                    <audio controls>
                      <source
                        src={require(`../../public/canciones/${item.ruta}`)}
                        type="audio/mp3"
                      />
                    </audio>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

