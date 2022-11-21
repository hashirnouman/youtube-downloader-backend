import { model, Schema } from "mongoose";

const ContentSchema: Schema = new Schema(
  {
    heading: { type: String, required: true },
    paragraph: { type: String, required: true, unique: true, lowercase: true },
  },
  {
    timestamps: true,
  }
);
export const ContentModel = model("Content", ContentSchema);
