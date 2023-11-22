import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <nav className="bg-gradient-to-r from-amber-950 to-amber-800 p-4">
                <ul className="flex space-x-4 text-white font-semibold">
                    <li className="hover:text-gray-300">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/listar">Listar Lote</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/crear">Crear Lote</Link>
                    </li>
                    <li className="hover:text-gray-300">
                        <Link to="/editar">Editar Lote</Link>
                    </li>
                </ul>
            </nav>
            <hr className="my-2 border-b-2 border-yellow-900" />


            <Outlet />
        </div>
    )
}

export default Menu