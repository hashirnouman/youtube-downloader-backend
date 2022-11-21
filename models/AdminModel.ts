import { model, Schema, Model, Document } from "mongoose";

const AdminSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  created: {
    type: Date,
    default: Date.now,
  },
});
export const AdminModel = model("Admin", AdminSchema);
