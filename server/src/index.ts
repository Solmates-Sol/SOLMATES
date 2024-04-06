import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/users";
import mentorRoutes from "./routes/mentor";
const app = express();
let PORT = 3000;

app.use(express.json());

declare global {
	namespace Express {
		interface Request {
			mentorId: string;
		}
	}
}

mongoose.connect(process.env.DB_LOCATION as string, {
	autoIndex: true,
});

app.use("/api/users", userRoutes);
app.use("/api/mentors", mentorRoutes);
app.listen(PORT, () => {
	console.log(`App running on PORT : ${PORT}`);
});
