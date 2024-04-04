import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Wallet from "../pages/wallets/Wallet";

const Navbar: React.FC = () => {
	const [searchBoxVisibility, setSearchBoxVisibility] =
		useState<boolean>(false);

	const [userNavPanel, setUserNavPanel] = useState<boolean>(false);

	const handleUserNavPanel = () => {
		setUserNavPanel((currVal) => !currVal);
	};

	const handleBlur = () => {
		setTimeout(() => {
			setUserNavPanel(false);
		}, 200);
	};

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="flex-none w-10 ">
					<span className="w-full text-xl md:text-2xl lg:text-3xl font-semibold mx-10">
						SOLMATES
					</span>
				</Link>

				<div className="flex items-center gap-3 md:gap-6 ml-auto">
					<Link
						to="/video"
						className="hidden md:flex gap-2 link items-center"
					>
						<i className="fi fi-sr-video-camera-alt text-2xl text-twitter mt-2"></i>
						<span className="text-xl text-black font-semibold">
							Chat
						</span>
					</Link>
					<Link to="/login" className="btn-dark py-2">
						Login
					</Link>
					<span className="btn-wallet py-2 mx-10">
						<Wallet />
						{/* Connect Wallet */}
					</span>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
