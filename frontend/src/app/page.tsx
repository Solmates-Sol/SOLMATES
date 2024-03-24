import Navbar from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import MentorComponent from "@/components/Mentors";
import FeaturesComponent from "@/components/Features";
import FooterComponent from "@/components/Footer";
export default function HomePage() {
	return (
		<div>
			<Navbar />
			<HomeComponent />
			<MentorComponent />
			<FeaturesComponent />
			<FooterComponent />
		</div>
	);
}
