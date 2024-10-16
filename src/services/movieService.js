import Movie from '../models/Movie.js';

const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } });
        // moviesQuery.regex('title', new RegExp(filter.search, 'i'));
    }

    if (filter.genre) {
        moviesQuery.find({ genre: filter.genre.toLowerCase() });
        // moviesQuery.where('genre').equals(filter.genre)
    }

    if (filter.year) {
        moviesQuery.find({ year: filter.year });
        // moviesQuery.where('year').equals(filter.year);
    }

    return moviesQuery;
};

const create = (movie) => {
    return Movie.create(movie);
};

const getOne = (movieId) => {
    return Movie.findById(movieId).populate('casts.cast');
}

const attach = (movieId, castId, character) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, character } } });

};

export default {
    getAll,
    create,
    getOne,
    attach
}