import * as adminService from "./admin.service.js";

export async function getUsers(req, res, next) {
  try {
    const result = await adminService.getUsers();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  const { id } = req.params;
  const parsedId = parseInt(id);
  try {
    const result = await adminService.getUserById(parsedId);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function deleteUserById(req, res, next) {
  const { id } = req.params;
  const parsedId = parseInt(id);
  try {
    const result = await adminService.deleteUserById(parsedId);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function updateUserById(req, res, next) {
  const { id } = req.params;
  const parsedId = parseInt(id);
  const data = req.body;
  try {
    const result = await adminService.updateUserById(parsedId, data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
