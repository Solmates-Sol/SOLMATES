
import Navbar from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import MentorComponent from "@/components/Mentors"
export default function HomePage() {
    return (
        <div>
            <Navbar />
            <HomeComponent />
			<MentorComponent />
        </div>
    );
}
