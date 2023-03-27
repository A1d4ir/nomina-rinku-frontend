import { useState } from "react"
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import ClienteAxios from "../config/ClienteAxios";

const RegistrarSueldo = () => {
    const [numeroEmpleado, setNumeroEmpleado] = useState(0);
    const [mes, setMes] = useState(1);
    const [entregas, setEntregas] = useState(0);
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if(numeroEmpleado === 0){
            setAlerta({
                msg: "El numero de empleado no puede ir vacio",
                error: true
            });
            return;
        }

        try {
            const formBody = {
                "empleadoId": parseInt(numeroEmpleado), 
                "mes": parseInt(mes), 
                "entregas": parseInt(entregas)
            }
            const { data } = await ClienteAxios.post('/sueldo', formBody);
            setAlerta({
                msg: "Empleado Creado correctamente",
                error: false
            });
            setNumeroEmpleado(0);
            setMes(1);
            setEntregas(0);
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
              Registro de Sueldo
          </h1>

          { msg && <Alerta alerta={alerta} />}

          <form
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
          >
            <div>
                <label
                    className="uppercase text-gray-600 block text-xl font-bold" 
                    htmlFor="numero-empleado"
                >
                    Numero de empleado
                </label>
                <input 
                    id="numero-empleado"
                    type="number"
                    placeholder="Numero de empleado"
                    className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    value={numeroEmpleado}
                    onChange={e => setNumeroEmpleado(e.target.value)}
                />
            </div>
            <div>
                <label
                    className="uppercase text-gray-600 block text-xl font-bold" 
                    htmlFor="mes"
                >
                    Mes
                </label>
                <select
                    id="mes"
                    className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    value={mes}
                    onChange={ e => setMes(e.target.value)}
                >
                    <option value={1} defaultValue>Enero</option>
                    <option value={2}>Febrero</option>
                    <option value={3}>Marzo</option>
                    <option value={4}>Abril</option>
                    <option value={5}>Mayo</option>
                    <option value={6}>Junio</option>
                    <option value={7}>Julio</option>
                    <option value={8}>Agosto</option>
                    <option value={9}>Septiembre</option>
                    <option value={10}>Octubre</option>
                    <option value={11}>Noviembre</option>
                    <option value={12}>Diciembre</option>
                </select>
            </div>
            <div className="my-5">
                <label
                    className="uppercase text-gray-600 block text-xl font-bold" 
                    htmlFor="entregas"
                >
                    Cantidad de entregas
                </label>
                <input 
                    id="entregas"
                    type="number"
                    placeholder="Cantidad de entregas"
                    className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
                    value={entregas}
                    onChange={e => setEntregas(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value="Registrar Sueldo"
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

export default RegistrarSueldo