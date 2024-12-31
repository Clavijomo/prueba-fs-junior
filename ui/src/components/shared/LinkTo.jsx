import { Link, useLocation } from 'react-router-dom'
import { IconMovie, IconCopyPlus } from '@tabler/icons-react'

export const LinkTo = ({ title, to }) => {
    const location = useLocation();

    return (
        <Link
            to={to || '/'}
            className={`${location.pathname === to ?
                'text-md font-semibold bg-blue-500 text-white'
                :
                'font-normal text-zinc-300'} 
                p-3 hover:bg-blue-500 hover:text-white w-full transition rounded-lg text-md flex gap-3 items-center`
            }
        >
            {title === 'Películas' ? (
                <IconMovie />
            ) : (
                <IconCopyPlus />
            )}
            {title}
        </Link>
    )
}
