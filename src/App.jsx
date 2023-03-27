import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import RegistrarEmpleado from "./pages/RegistrarEmpleado";
import RegistrarSueldo from "./pages/RegistrarSueldo";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registrar-empleado" element={<RegistrarEmpleado />} />
        <Route path="registrar-sueldo" element={<RegistrarSueldo />} />
      </Route>
    </Routes>
  )
}

export default App
