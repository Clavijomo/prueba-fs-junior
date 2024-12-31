import { IconExclamationCircle } from '@tabler/icons-react'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export const Alert = ({ error }) => {
    return (
        <div className="text-red-900 w-full rounded-xl bg-red-200 p-5">
            <div className="flex items-center gap-2">
                <IconExclamationCircle />
                <h1 className="font-semibold text-2xl">Oops! Ocurrió un error :(</h1>
            </div>
            <p className="mt-3">{error}</p>
            {!error === 'Ruta no encontrada' &&
                <Link to={'/'} className="flex gap-2 items-center mt-10 font-semibold">
                    <IconArrowLeft />
                    Volver al catálogo
                </Link>
            }
        </div>
    )
}
