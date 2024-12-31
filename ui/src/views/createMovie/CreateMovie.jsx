import { FormRegisterMovie } from "./_FormRegisterMovie"

export const CreateMovie = () => {
    return (
        <div className="w-4/5 mx-auto h-2/4">
            <div className="grid grid-cols-2 gap-5 h-full bg-white p-2 rounded-xl">
                <div className="bg-blue-500 h-full p-5 rounded-xl flex flex-col justify-between">
                    <p className="font-semibold text-3xl text-white">MoviesApp</p>
                    <div>
                        <h1 className="text-white font-semibold text-2xl my-2">Crea, inventa y observa</h1>
                        <p className="text-white">En el catálogo de películas, puedes ver todas las películas que quieras crear sin ningún límite y con un solo clic</p>
                    </div>
                    <div className=" shadow-lg p-3 rounded-lg bg-blue-700 text-white">
                        <p className="italic">"Gran aplicación, muy completa y amigable."</p>
                        <div className="flex items-center gap-2 mt-5">
                            <div className="rounded-full p-1 bg-blue-950 h-8 w-8 text-center">
                                <h1 className="text-white">U</h1>
                            </div>
                            <p className="text-sm font-semibold">Usuario</p>
                        </div>
                    </div>
                </div>
                <div className="h-full flex flex-col justify-center">
                    <div>
                        <h1 className="text-3xl">Nueva película</h1>
                        <p className="text-zinc-400 my-3">Llena los campos para poder ver tu película creada en el catálogo</p>
                        <FormRegisterMovie />
                    </div>
                </div>
            </div>
        </div>
    )
}
