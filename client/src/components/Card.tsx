function Card() {
	return (
		<div className="max-w-[400px] max-h-80 mb-2 py-5 shadow-lg bg-white flex flex-col text-center mx-2">
			<img
				src="https://api.dicebear.com/8.x/micah/svg?seed=aneka"
				alt="mentor"
				className="w-full h-40 object-cover object-fill"
			/>
			<h1> Mentor Name</h1>
			<p>Software Engineer</p>
		</div>
	);
}

export default Card;
