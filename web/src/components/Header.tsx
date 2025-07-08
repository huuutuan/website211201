export default function Header() {
	return (
		<header className="bg-white text-amber-600 py-4">
			<div className="container mx-auto flex justify-between items-center">
				<a href="/" className="text-xl font-bold">
					Your Company Name
				</a>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="hover:underline">Home</a>
						</li>
						<li>
							<a href="/about" className="hover:underline">About</a>
						</li>
						<li>
							<a href="/contact" className="hover:underline">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}