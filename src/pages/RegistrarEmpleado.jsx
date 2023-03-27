import { useState } from "react";
import { Link } from "react-router-dom";

import Alerta from "../components/Alerta";
import ClienteAxios from "../config/ClienteAxios";

const RegistrarEmpleado = () => {
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState(1);
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre].includes('')){
            setAlerta({
                msg: "El nombre es obligatorio",
                error: true
            });
            return;
        }

        try {
            const formBody = {
                "nombre": nombre,
                "rol": parseInt(rol)
            }

            const { data } = await ClienteAxios.post('/empleado', formBody);
            setAlerta({
                msg: "Empleado Creado correctamente",
                error: false
            });
            setNombre("");
            setRol(1);
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    }

    const { msg } = alerta;

    return (
        <div className="flex flex-col">       
          <h1 className="text-sky-600 font-black text-6xl capitalize">
              Crear nuevo empleado
          </h1>

          { msg && <Alerta alerta={alerta} />}

          <form
          className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
          >
            <div>
                <label
                    className="uppercase text-gray-600 block text-xl font-bold" 
                    htmlFor="nombre"
                >
                    Nombre
                </label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre del empleado"
                    className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label
                    className="uppercase text-gray-600 block text-xl font-bold" 
                    htmlFor="rol"
                >
                    Rol
                </label>
                <select
                    id="rol"
                    className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    value={rol}
                    onChange={ e => setRol(e.target.value)}
                >
                    <option value={1} defaultValue>Chofer</option>
                    <option value={2}>Cargador</option>
                    <option value={3}>Auxiliar</option>
                </select>
            </div>
            <input
                type="submit"
                value="Registrar Empleado"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </form>

          <Link
            to="/"
            className="
                bg-lime-700 
                mb-5 
                w-full py-3 
                text-white 
                uppercase 
                font-bold 
                rounded 
                hover:cursor-pointer 
                hover:bg-lime-800 
                transition-colors
                mt-5
                text-center"
          >
            Home
          </Link>
        </div>
    )
}

export default RegistrarEmpleado