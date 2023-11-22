import React, { useEffect, useRef } from "react"
import Api from "../components/Api"
import { useNavigate } from "react-router-dom";

const CrearLote=() =>{
    const fecha_creacion = useRef();
    const nombre = useRef();
    const longitud = useRef();
    const latitud = useRef();
    const fincas_id   = useRef();

    const navigate = useNavigate()

    useEffect(() => {
        nombre.current.focus();
    },[])

    const handleSubmit = (e)=> {
        e.preventDefault();

        const data = {
            fecha_creacion: fecha_creacion.current.value,
            nombre: nombre.current.value,
            longitud: longitud.current.value,
            latitud: latitud.current.value,
            fincas_id : fincas_id .current.value,
        };
        Api.post("/registrar/", data, {}).finally(()=>{
            navigate("/listar")
        })
    }
    return (
        <form onSubmit={handleSubmit} method="post">
            <h1 className="text-center font-bold underline text-3xl p-3 m-2">Crear Lote</h1>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="fecha_creacion" name="fecha_creacion" ref={fecha_creacion} placeholder='fecha_creacion' />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="nombre" name="nombre" ref={nombre} placeholder='nombre' />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="longitud" name="longitud" ref={longitud} placeholder='longitud' />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="latitud" name="latitud" ref={latitud} placeholder='latitud' />
            </div>
            <div className="max-w-xs">
                <input className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="fincas_id " name="fincas_id " ref={fincas_id } placeholder='fincas_id ' />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" 
            type="submit">Registrar Lote</button>
        </form>
    )
}


export default CrearLote