import React,{ useEffect, useState } from "react"
import Api from "../components/Api"
import { Link } from "react-router-dom";

const ListarLote = () => {
    const [Lotes, setLotes] = useState([]);

    useEffect(() => {
        const buscarLotes = async () => {
            try {
                const response = await Api.get('/listar');
                setLotes(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        buscarLotes();
    },[]);
    return (
        <div className="m-3 p-3">
            <p className="font-bold">
            </p>
            <h1 className="text-center font-bold underline text-3xl">Lotes</h1>
            {Lotes.map((task) => (
                <div className="border-y-1 focus:bg-slate-300"
                key={task.id}>
                <Link to={`/editar/${task.id}`}>{task.nombre}</Link>
                </div>
            ))}
        </div>
    )
}

export default ListarLote