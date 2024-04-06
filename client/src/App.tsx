import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Mentors from "./pages/Mentors";
import Profile from "./pages/Profile"
import Footer from "./components/Footer";

function App() {
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
