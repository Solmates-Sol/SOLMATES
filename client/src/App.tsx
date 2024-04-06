import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import SignIn from "./pages/SignIn";
import { useMemo } from "react";
import Register from "./pages/Register";
import Mentors from "./pages/Mentors";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
// import { WalletProvider } from "./context/WalletContext";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";

function App() {
	const endpoint = useMemo(() => "https://api.devnet.solana.com", []);
	const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

	return (
	<div>
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<HomeComponent />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/mentors" element={<Mentors />} />
				<Route path="/profile/:wallet-address" element={<Profile/>} />
			</Route>
		</Routes>
		<Footer />
	</div>
			
	);
}

export default App;
