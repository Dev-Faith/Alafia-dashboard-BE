import { Request, Response, NextFunction } from "express";
import * as service from "../services/resident.service";

export const createResident = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resident = await service.createResident(req.body);
    res.status(201).json(resident);
  } catch (error) {
    next(error);
  }
};

export const getResidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const residents = await service.getResidents();
    res.json(residents);
  } catch (error) {
    next(error);
  }
};

export const updateResident = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resident = await service.updateResident(req.params.id, req.body);
    res.json(resident);
  } catch (error) {
    next(error);
  }
};

export const deleteResident = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deleteResident(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
