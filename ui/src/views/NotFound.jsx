import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black text-center">
            <h1 className="text-4xl font-bold text-white mb-4">404 - Página no encontrada</h1>
            <p className="text-gray-300 mb-8">La página que estás buscando no existe o fue removida.</p>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Volver al inicio
            </Link>
        </div>
    )
}
