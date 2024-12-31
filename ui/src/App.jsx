import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { MovieDetail } from './views/detailMovie/MovieDetail';
import { HomeMovies } from './views/Movies/HomeMovies';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomeMovies />} />
                    <Route path='/movies/:id' element={<MovieDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}