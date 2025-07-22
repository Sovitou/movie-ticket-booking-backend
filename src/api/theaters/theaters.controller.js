import {
  TheaterCreateSchema,
  TheaterUpdateSchema,
} from "../../models/theater.model.js";
import * as theaterService from "./theaters.service.js";

export async function createTheater(req, res, next) {
  try {
    const data = TheaterCreateSchema.parse(req.body);
    const result = await theaterService.createTheater(data);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

export async function updateTheater(req, res, next) {
  try {
    const { id } = req.params;
    const data = TheaterUpdateSchema.parse(req.body);
    const result = await theaterService.updateTheater(id, data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function deleteTheater(req, res, next) {
  try {
    const { id } = req.params;
    const result = await theaterService.deleteTheater(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getTheaters(req, res, next) {
  try {
    const result = await theaterService.getTheaters();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getTheaterById(req, res, next) {
  try {
    const { id } = req.params;
    const result = await theaterService.getTheaterById(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
