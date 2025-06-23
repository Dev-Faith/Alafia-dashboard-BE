import mongoose from "mongoose";

const ResidentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      validate: {
        validator: (dob: Date) => dob < new Date(),
        message: "Date of birth must be in the past",
      },
    },
    careLevel: {
      type: String,
      enum: ["INDEPENDENT", "ASSISTED", "MEMORY_CARE", "SKILLED_NURSING"],
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
      match: [/^[A-Z]\d{3}$/, "Room number format: A101"],
    },
  },
  {
    timestamps: true,
  }
);

export const Resident = mongoose.model("Resident", ResidentSchema);
