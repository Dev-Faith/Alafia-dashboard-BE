import { Resident } from "../models/resident-model";
import {
  residentSchema,
  partialResidentSchema,
} from "../validations/resident.validation";
import createHttpError from "http-errors";

export const createResident = async (data: unknown) => {
  const validation = residentSchema.safeParse(data);
  if (!validation.success) {
    throw createHttpError(400, validation.error.message);
  }
  return Resident.create(validation.data);
};

export const getResidents = async () => {
  return Resident.find().lean();
};

export const updateResident = async (id: string, data: unknown) => {
  const validation = partialResidentSchema.safeParse(data);
  if (!validation.success) {
    throw createHttpError(400, validation.error.message);
  }

  const updated = await Resident.findByIdAndUpdate(id, validation.data, {
    new: true,
    runValidators: true,
  }).lean();

  if (!updated) throw createHttpError(404, "Resident not found");
  return updated;
};

export const deleteResident = async (id: string) => {
  const result = await Resident.findByIdAndDelete(id);
  if (!result) throw createHttpError(404, "Resident not found");
};
