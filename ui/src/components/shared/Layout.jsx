import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <div className='flex gap-3 h-screen p-5'>
                <div className='md:w-1/5 h-full'>
                    <Sidebar />
                </div>
                <div className='w-full h-full'>
                    <div className='flex flex-col space-y-5 sm:h-full overflow-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
