import { Schema, model } from "mongoose";

const AdminSchema = new Schema({});

export const AdminModel = model("Admin", AdminSchema);
