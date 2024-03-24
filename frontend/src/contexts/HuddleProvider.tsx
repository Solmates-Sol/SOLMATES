"use client";
import React from "react";
import { HuddleClient, HuddleProvider } from "@huddle01/react";

// Initialize HuddleClient with your project credentials
const huddleClient = new HuddleClient({
	projectId: "4v2R9A9qCNcW1FzH72lHhDPCTcpJNpme",
	options: {
		activeSpeakers: {
			size: 12,
		},
	},
});

const HuddleContextProvider = ({ children }: any) => {
	return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
};

export default HuddleContextProvider;
