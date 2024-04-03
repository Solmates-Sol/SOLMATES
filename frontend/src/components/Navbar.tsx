"use client";
import Wallet from "@/pages/wallets/Wallet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
	const router = useRouter();

	const [userNavPanel, setUserNavPanel] = useState(false);

	const handleUserNavPanel = () => {
		setUserNavPanel((currVal) => !currVal);
	};
	let access_token = false;
	const handleBlur = () => {
		setTimeout(() => {
			setUserNavPanel(false);
		}, 200);
	};

	const handleNavigate = () => {
		router.push("/video");
	};

	return (
		<>
			<nav className="navbar">
				<Link href="/" className="flex-none w-10">
					<span className="w-full text-3xl font-semibold">
						SOLMATES
					</span>
				</Link>

				<div className="flex items-center gap-3 md:gap-6 ml-auto">
					<Link
						href="/video"
						className="hidden md:flex gap-2 link items-center"
						onClick={handleNavigate}
					>
						<i className="fi fi-sr-video-camera-alt text-2xl text-twitter mt-2"></i>
						<span className="text-xl text-black font-semibold">
							Chat
						</span>
					</Link>
					<Link href="/login" className="btn-dark py-2">
						Login
					</Link>
					<span className="btn-wallet py-2">
						<Wallet />
						{/* Connect Wallet */}
					</span>
				</div>
			</nav>
			{/* <Outlet /> */}
		</>
	);
};

export default Navbar;
