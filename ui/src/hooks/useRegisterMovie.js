import { useState } from "react";
import { useMovies } from "./useMovies";
import { moviesServices } from "../services/movie";
import { useNavigate } from "react-router-dom";

export const useRegisterMovie = () => {
    const navigate = useNavigate();

    const [movieCreate, setMovieCreate] = useState({
        title: '',
        year: new Date().getFullYear(),
        synopsis: '',
        genre: '',
        cast: []
    });

    const [errors, setErrors] = useState({});
    const [actor, setActor] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { fetchMovies } = useMovies();

    const handleChange = (key, value) => {
        setMovieCreate((prevDate) => ({
            ...prevDate,
            [key]: value
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: ''
        }))
    }

    const addActor = () => {
        if (actor.trim()) {
            setMovieCreate((prev) => ({
                ...prev,
                cast: [...prev.cast, actor]
            }))

            setActor('');
        }
    }

    const removeActor = (index) => {
        setMovieCreate((prev) => ({
            ...prev,
            cast: prev.cast.filter((_, i) => i !== index)
        }))
    }

    const validateForm = () => {
        const newErrors = {};
        if (!movieCreate.title.trim()) {
            newErrors.title = 'El título es requerido';
        }

        if (!movieCreate.synopsis.trim()) {
            newErrors.synopsis = 'La sinopsis es requerida';
        }

        if (!movieCreate.year || isNaN(movieCreate.year) || movieCreate.year < 1900) {
            newErrors.year = 'Selecciona un año'
        }

        if (!movieCreate.genre) {
            newErrors.genre = 'Selecciona un género'
        }

        if (movieCreate.cast.length === 0) {
            newErrors.cast = 'Agrega al menos un actor'
        }

        return newErrors;
    }

    const handleSetMovie = async (data) => {
        try {
            await moviesServices.createMovie(data);
        } catch (err) {
            setSuccessMessage("Ocurrió un error al crear la película");
            console.error(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
            setLoading(false);
            return
        };

        try {
            setSuccessMessage('Pelicula creada exitosamente');
            await handleSetMovie(movieCreate);
            await fetchMovies();
            setErrors({});
            setMovieCreate({
                title: '',
                year: new Date().getFullYear(),
                synopsis: '',
                genre: '',
                cast: []
            });

            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 3000);
        } catch (err) {
            console.error('Error al crear la pelicula:', err.data.error);
            setErrors({ api: "No se pudo crear la pelicula. Intenta luego." });
        }
    }

    const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
    const genres = ['Sci-Fi', 'Action', 'Comedy'];

    return {
        actor,
        years,
        genres,
        movieCreate,
        successMessage,
        errors,
        loading,
        handleChange,
        handleChange,
        handleSubmit,
        removeActor,
        setActor,
        addActor
    }
}
