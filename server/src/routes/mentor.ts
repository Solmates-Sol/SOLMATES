import express, { Request, Response } from "express";
import Mentor from "../models/mentor";
import { MentorType } from "../shared/types";

const router = express.Router()


declare global {
    namespace Express {
        interface Request {
            mentorId: string;
        }
    }
}

router.post("/", async (req: Request, res: Response) => {
    try{
        const mentorData: MentorType = req.body;

        const mentor = new Mentor(mentorData);
        await mentor.save();
        res.status(201).send(mentor);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something went wrong!"
        })
    }
})

router.get("/", async(req: Request, res: Response) => {
    try{
        const mentors = await Mentor.find({
            mentorId: req.mentorId
        })
        res.json(mentors);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error fetching mentors!"
        })
    }
})

router.get("/all-Mentors", async(req: Request, res: Response) => {
    try{
        const mentors = await Mentor.find();
        res.json(mentors);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error fetching mentors!"
        })
    }
}
)

export default router;