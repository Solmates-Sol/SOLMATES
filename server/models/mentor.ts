import mongoose from "mongoose";
import { MentorType } from "../shared/types"

const mentorSchema = new mongoose.Schema<MentorType>({
    username: { type: String, required: true},
    email : { type: String, required: true},
    companyName: { type: String},
    Role : { type: String},
    location: { type: String, required: true},
    yearsOfExperience: { type: Number, required: true},
    description: { type: String, required: true},
    pricePerSession: { type: Number, required: true},
    github: { type: String},
    linkedIn: { type: String},
    twitter: { type: String},
    tags: [{ type: String, required: true}],
})

const Mentor = mongoose.model<MentorType>("Mentor", mentorSchema);

export default Mentor;