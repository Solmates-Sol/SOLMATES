import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<HomeComponent />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" />
			</Route>
		</Routes>
	);
}

export default App;
