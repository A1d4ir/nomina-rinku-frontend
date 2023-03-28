import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import ClienteAxios from "../config/ClienteAxios";

const ListaSueldos = () => {
    const { empleadoId } = useParams();
    const navigate = useNavigate();
    const [sueldos, setSueldos] = useState([{}]);
    const [alerta, setAlerta] = useState({});
    const [cargando, setCargando] = useState(false);
1
    if(empleadoId == undefined) navigate("/");

    useEffect(() => {
        obtenerSueldos(empleadoId);
    }, []);

    const obtenerSueldos = async empleadoId => {
        setCargando(true);
        try {
            const { data } = await ClienteAxios(`/sueldo/${empleadoId}`);
            setSueldos(data);
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
                to="/lista-empleados"
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
                Volver
            </Link>

            { msg && <Alerta alerta={alerta} />}

            <div className="flex w-full items-baseline">
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-1/12">
                    mes
                </p>
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-1/12">
                    Horas
                </p>
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-2/12">
                    Pago Entregas
                </p>
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-2/12">
                    Pago Bonos
                </p>
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-2/12">
                    Retenciones
                </p>
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-2/12">
                    Vales
                </p>
                <p className="border-r-2 border-b-2 border-gray-500 px-3 w-2/12">
                    Sueldo
                </p>
            </div>

            { sueldos.map(sueldo => (
                <div
                    key={`${sueldo.id}`}
                    className="flex w-full items-baseline"
                >
                    <p className="border-r-2 border-gray-500 px-3 w-1/12">
                        {sueldo.mes == 1 && "Enero"}
                        {sueldo.mes == 2 && "Febrero"}
                        {sueldo.mes == 3 && "Marzo"}
                        {sueldo.mes == 4 && "Abril"}
                        {sueldo.mes == 5 && "Mayo"}
                        {sueldo.mes == 6 && "Junio"}
                        {sueldo.mes == 7 && "Julio"}
                        {sueldo.mes == 8 && "Agosto"}
                        {sueldo.mes == 9 && "Septiembre"}
                        {sueldo.mes == 10 && "Octubre"}
                        {sueldo.mes == 11 && "Noviembre"}
                        {sueldo.mes == 12 && "Diciembre"}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-1/12">
                        {sueldo.horasTrabajadas}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-2/12">
                        {sueldo.pagoPorEntregas}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-2/12">
                        {sueldo.pagoPorBonos}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-2/12">
                        {sueldo.retenciones}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-2/12">
                        {sueldo.vales}
                    </p>
                    <p className="border-r-2 border-gray-500 px-3 w-2/12">
                        {sueldo.sueldo}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ListaSueldos