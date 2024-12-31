import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const LinkTo = ({ title, to }) => {
    const location = useLocation();

    return (
        <Link
            to={to || '/'}
            className={`${location.pathname === to ?
                'text-md font-semibold bg-blue-500 text-white'
                :
                'font-normal'} 
                p-3 hover:bg-blue-500 hover:text-white w-full transition rounded-2xl text-md flex gap-3 items-center`
            }
        >
            {title === 'Películas' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.5"> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 4l0 16"></path> <path d="M16 4l0 16"></path> <path d="M4 8l4 0"></path> <path d="M4 16l4 0"></path> <path d="M4 12l16 0"></path> <path d="M16 8l4 0"></path> <path d="M16 16l4 0"></path> </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.5"> <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path> </svg>
            )}
            {title}
        </Link>
    )
}
