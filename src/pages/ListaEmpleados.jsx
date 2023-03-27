import { useEffect, useState } from "react"
import Alerta from "../components/Alerta";
import ClienteAxios from "../config/ClienteAxios";
import { Link } from "react-router-dom";

const ListaEmpleados = () => {
    const [empleados, setEmpleados] = useState([{}]);
    const [alerta, setAlerta] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        obtenerEmnpleados();
    }, []);

    const obtenerEmnpleados = async () => {
        setCargando(true);
        try {
            const { data } = await ClienteAxios("/empleado");
            setEmpleados(data);
            setTimeout(() => {
                setCargando(false);
            }, 500);
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    }

    if(cargando) return "Cargando..."

    const { msg } = alerta;

    return (
        <div className="flex flex-col w-full items-center">
            <Link
                to="/"
                className="
                    w-1/4
                    bg-lime-700 
                    mb-5 
                    py-3 
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

            { msg && <Alerta alerta={alerta} />}

            { empleados.map(empleado => (
                <div 
                    key={`${empleado.id}`}
                    className="flex w-full items-baseline"
                >
                    <p className="border-r-2 border-gray-500 px-3 w-1/12">
                        {empleado.id}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-4/12">
                        {empleado.nombre}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-2/12">
                        {empleado.rol == 1 && "Chofer"}
                        {empleado.rol == 2 && "Cargador"}
                        {empleado.rol == 3 && "Auxiliar"}
                    </p>

                    <Link
                        className="
                            w-2/12
                            bg-sky-700
                            mx-3
                            py-3
                            text-white 
                            uppercase 
                            font-bold 
                            rounded 
                            hover:cursor-pointer 
                            hover:bg-sky-800 
                            transition-colors
                            mt-5
                            text-center
                        "
                        to={`/registrar-sueldo/${empleado.id}`}
                    >
                        Registrar Sueldo
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ListaEmpleados