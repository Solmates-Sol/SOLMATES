"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

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
						href="/editor"
						className="hidden md:flex gap-2 link items-center"
					>
						<i className="fi fi-sr-video-camera-alt text-2xl text-twitter mt-2"></i>
						<p className="text-xl text-black font-semibold">Chat</p>
					</Link>
					<Link className="btn-dark py-2" href="/signin">
						Connect Wallet
					</Link>
				</div>
			</nav>
			{/* <Outlet /> */}
		</>
	);
};

export default Navbar;
