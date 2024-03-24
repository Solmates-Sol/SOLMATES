import { HuddleIframe } from "@huddle01/iframe";

const Video = () => {
	return (
		<div className="w-full h-screen">
			<HuddleIframe
				roomUrl="https://iframe.huddle01.com"
				className="w-full h-screen aspect-video"
				projectId="4v2R9A9qCNcW1FzH72lHhDPCTcpJNpme"
			/>
		</div>
	);
};

export default Video;
