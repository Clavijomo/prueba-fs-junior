import React from 'react';
import { LinkTo } from './LinkTo';

export const Sidebar = () => {
    return (
        <aside className='w-full h-full bg-gray-800 rounded-xl p-5'>
            <h1 className='text-2xl text-white'>Movies App</h1>
            <div className='mt-5 space-y-4'>
                <LinkTo
                    title={'Películas'}
                    to={'/'}
                />
                <LinkTo
                    title={'Crear película'}
                    to={'/create-movie'}
                />
            </div>
        </aside>
    )
}
