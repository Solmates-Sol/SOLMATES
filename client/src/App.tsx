import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Mentors from "./pages/Mentors";
import Profile from "./pages/Profile"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<HomeComponent />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/mentors" element={<Mentors />} />
				<Route path="/profile" element={<Profile/>} />
			</Route>
		</Routes>
	);
}

export default App;
