import { Link } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from "react";

export default function Homepage() {

    const [canciones, setCanciones] = useState([])

    const getSongs = () => {
        fetch("json/datos.json")
            .then(response => response.json())
            .then(datos => {
                const top3 = datos.Api_Canciones.sort((a, b) => b.reproducciones - a.reproducciones).slice(0, 3)
                setCanciones(top3)
            })
    }

    useEffect(() => {
        getSongs()
    }, [])

    return (
        <div>
            <div className='container mt-4'>
                <div className="card text-white bg-dark mb-3 p-4">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <div className="card-body">
                                <h2 className="card-title"><span>Canciones Gratis Para La Comunidad!</span></h2>
                                <p className="card-text">
                                    Con este sitio podrás escuchar audios de manera libre...
                                </p>
                                <p className="card-text">
                                    <Link to="/songs" className="btn btn-primary btn-sm"
                                    >Ver canciones</Link>
                                </p>
                            </div>
                        </div>
                        <div id="carouselportada" className="carousel slide col-md-5" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./imagenes/portada.jpeg" className="d-block w-100" alt="portada" />
                                </div>
                                <div className="carousel-item">
                                    <img src="./imagenes/portada2.jpg" className="d-block w-100" alt="portada1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="./imagenes/portada3.jpg" className="d-block w-100" alt="portada2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h2 className="text-center mt-4">Top 3</h2>
                <hr />
                <div className='row'>
                <div className='col-4 text-center m-0 font-weight-bold d-none d-lg-block'><h4>Nombre</h4></div>
                <div className='col-4 text-center m-0 font-weight-bold'><h4>Canción</h4></div>   
                </div>
                <div className='row'>
                    {canciones
                        .sort((a, b) => b.reproducciones - a.reproducciones)
                        .slice(0, 3)
                        .map((item, index) => (
                        <div key={index} className='row border-top border-bottom mx-0'> {item.reproducciones > 60 ? (
                            <>
                            <div className='topsongs col-12 col-lg-4 col-md-6 text-center m-3 font-weight-bold'>{item.nombre}</div>
                            <div className='col-12 col-lg-3 col-md-6 text-center m-3 font-weight-bold'>
                            <audio controls>
                            <source src={require(`../../public/canciones/${item.ruta}`)} type="audio/mp3" />
                            </audio>
                            </div>
                            </>
                        ): null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

};






