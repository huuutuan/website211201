import { Navbar } from "../(home)/Navbar";

interface Props {
	children: React.ReactNode;
}

const MainLayout = ({ children }: Props ) => {
	return (
		<div className="">
			<div className="relative h-min">
				<div className="absolute inset-0 w-full h-full -z-10">
					<img src="/Banh-Cay-3.jpg" alt="abc" className="h-80 w-full object-cover"/>
				</div>
				<div className="relative h-80 ">
					<Navbar />
				</div>
			</div>
			
			<main className="flex-1">
				{children}
			</main>
		</div>
		
	)
}

export default MainLayout;