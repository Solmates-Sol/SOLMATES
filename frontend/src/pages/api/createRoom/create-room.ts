import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { data } = await axios.post(
			"https://api-huddle01.com/api/v1/create-room",
			{
				title: "Mentor Meet",
			},
			{
				headers: {
					"Content-Type": "application/json",
					// "x-api-key": process.env.API_KEY as string,
					"x-api-key": "O2f8knlUEX4P4OI26SDArlbxmKCdsPuK",
				},
			}
		);

		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default handler;
