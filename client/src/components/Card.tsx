function Card() {
	return (
		<div className="w-[300px] max-h-80 mb-2 py-5 rounded-md shadow-lg bg-white flex flex-col items-center justify-center text-center mx-2">
			<img
				src="https://api.dicebear.com/8.x/micah/svg?seed=aneka"
				alt="mentor"
				className="w-[150px] h-[150px] object-cover border border-black rounded-full"
			/>
			<h1 className="font-serif"> Mentor Name</h1>
			<p className="font-serif">Software Engineer</p>
		</div>
	);
}

export default Card;
