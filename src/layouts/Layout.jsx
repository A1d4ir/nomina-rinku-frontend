import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
        <Outlet />
    </main>
  )
}

export default Layout