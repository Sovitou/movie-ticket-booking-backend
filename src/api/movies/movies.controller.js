import {
  MovieCreateSchema,
  MovieUpdateSchema,
} from "../../models/movie.model.js";
import * as movieService from "./movies.service.js";

export async function createMovie(req, res, next) {
  try {
    const data = MovieCreateSchema.parse(req.body);
    const result = await movieService.createMovie(data);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

export async function updateMovie(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const data = MovieUpdateSchema.parse(req.body);
    const result = await movieService.updateMovie(id, data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function deleteMovie(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const result = await movieService.deleteMovie(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getMovies(req, res, next) {
  try {
    const result = await movieService.getMovies();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getMovieById(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const result = await movieService.getMovieById(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
