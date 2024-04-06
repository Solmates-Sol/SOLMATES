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
			<nav className="navbar z-30">
				<Link to="/" className="flex-none w-10 ">
					<span className="w-full text-xl md:text-2xl lg:text-3xl font-semibold mx-10">
						SOLMATES
					</span>
				</Link>

				<div className="flex items-center gap-3 md:gap-6 ml-auto">
					<Link to="/signin" className="btn-dark py-2 px-6">
						Join Now
					</Link>
					{/* <span className="btn-wallet py-2 mx-10"> */}
						<Wallet />
						{/* Connect Wallet */}
					{/* </span> */}
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
