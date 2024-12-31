import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { MovieDetail } from './views/detailMovie/MovieDetail';
import { HomeMovies } from './views/Movies/HomeMovies';
import { CreateMovie } from './views/createMovie/CreateMovie';
import { NotFound } from './views/NotFound';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomeMovies />} />
                    <Route path='/movies/:id' element={<MovieDetail />} />
                    <Route path='/create-movie' element={<CreateMovie />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}