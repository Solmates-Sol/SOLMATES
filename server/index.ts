import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/users";
const app = express();
let PORT = 3000;

app.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
	autoIndex: true,
});

app.use("/api/users", userRoutes);
app.listen(PORT, () => {
	console.log(`App running on PORT : ${PORT}`);
});
