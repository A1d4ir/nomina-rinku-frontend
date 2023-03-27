import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center">
            <h1  className="text-sky-600 font-black text-5xl capitalize mb-10 text-center">
                Manejo de Nomina Rinku, elija la operación que desea realizar
            </h1>
            <nav className="flex flex-col w-1/3">
                <Link
                    to="/registrar-empleado"
                    className="
                        text-center
                        bg-sky-700 
                        mb-5
                        p-5
                        w-full py-3 
                        text-white 
                        uppercase 
                        font-bold 
                        rounded 
                        hover:cursor-pointer 
                        hover:bg-sky-800 
                        transition-colors
                        mt-5"
                >
                    Registrar Empleado
                </Link>
                <Link
                    to="/registrar-sueldo"
                    className="
                        text-center
                        bg-sky-700 
                        mb-5
                        p-5
                        w-full py-3 
                        text-white 
                        uppercase 
                        font-bold 
                        rounded 
                        hover:cursor-pointer 
                        hover:bg-sky-800 
                        transition-colors
                        mt-5"
                >
                    Registrar Sueldo
                </Link>
            </nav>
        </div>
    </>
  )
}

export default Home