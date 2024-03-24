import type { NextApiRequest, NextApiResponse } from "next";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import { API } from "@huddle01/server-sdk/api";

const getRoomId = async () => {
	const api = new API({
		apiKey: process.env.API_KEY!,
	});

	const createNewTokenGatedRoom = await api.createRoom({
		title: "Solmate",
		chain: "SOLANA",
		tokenType: "SPL",
		contractAddress: ["6atmHfEydp2PHF9QPhhzzApJfnKzJonKTFcE99oYea5L"],
	});

	const roomId = createNewTokenGatedRoom?.data;

	return roomId;
};

export default async function getServerSideProps(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { roomId } = req.query;

	if (!roomId) {
		return res.status(400).json({
			error: "RoomId is required",
		});
	}
	const accessToken = new AccessToken({
		// apiKey: process.env.API_KEY!,
		apiKey: "O2f8knlUEX4P4OI26SDArlbxmKCdsPuK",
		// roomId: roomId as string,
		roomId: "",
		role: Role.HOST,
		permissions: {
			admin: true,
			canConsume: true,
			canProduce: true,
			canProduceSources: {
				cam: true,
				mic: true,
				screen: true,
			},
			canRecvData: true,
			canSendData: true,
			canUpdateMetadata: true,
		},
	});

	const token = await accessToken.toJwt();

	return res.status(200).json({
		token,
	});
}
