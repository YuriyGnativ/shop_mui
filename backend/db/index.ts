import mongoose from "mongoose";

mongoose.Promise = Promise;

mongoose.connect("mongodb://myAppAdmin:root@localhost:27017/myapp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error:"));

export { db, mongoose };
