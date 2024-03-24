"use client";
import Navbar from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import MentorComponent from "@/components/Mentors";
import { HuddleClient, HuddleProvider } from "@huddle01/react";

const huddleClient = new HuddleClient({
	// projectId: env.NEXT_PUBLIC_PROJECT_ID,
	projectId: "4v2R9A9qCNcW1FzH72lHhDPCTcpJNpme",
	options: {
		activeSpeakers: {
			size: 8,
		},
	},
});

export default function HomePage() {
	return (
		<HuddleProvider client={huddleClient}>
			<Navbar />
			<HomeComponent />
			<MentorComponent />
		</HuddleProvider>
	);
}
