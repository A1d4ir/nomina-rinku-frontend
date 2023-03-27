import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
        <div>
            <h1  className="text-sky-600 font-black text-5xl capitalize mb-10">
                Manejo de Nomina Rinku, elija la operación que desea realizar
            </h1>
            <nav>
                <Link
                    to="/registrar-empleado"
                    className="
                        bg-sky-700 
                        mb-5 
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
            </nav>
        </div>
    </>
  )
}

export default Home