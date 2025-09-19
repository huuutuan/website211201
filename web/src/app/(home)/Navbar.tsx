"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import Link from "next/link";
import { usePathname } from "next/navigation";


const poppins = Poppins({
	weight: ["700"],
	subsets: ["latin"],
});

interface NavbarItemProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
};

const NavbarItem = ({
	href,
	children,
	isActive,
}: NavbarItemProps) => {
	return (
		<Button variant="outline" className={cn("bg-transparent rounded-full border-transparent px-3.5 text-lg")} asChild>
			<Link href={href }>
				{children}
			</Link>
		</Button>
	)
}

const navbarItems = [
	{
		href: "/",
		children: "Home",
	},
	{
		href: "/about",
		children: "About",
	},
	{
		href: "/contact",
		children: "Contact",
	},
]

export const Navbar = () => {
	const pathName = usePathname();
	return (
		<nav className="h-20 text-white grid grid-cols-3 items-center font-medium bg-transparent dark:bg-gray-900">
			<div>	
				<Link href="/" className="flex items-center pl-6">
					<span className={cn("text-3xl font-normal", poppins.className)}>
						Đặc Sản Thái Bình
					</span>
				</Link>
			</div>

			<div>

			</div>

			<div className=" flex justify-end pr-6">
				{/* {navbarItems.map((item) => (
					<NavbarItem
						key={item.href}
						href={item.href}
						isActive={pathName === item.href}
					>
						{item.children}
					</NavbarItem>
				))} */}
				

				<Button variant="outline" className={cn("bg-transparent rounded-full border-transparent px-3.5 text-2xl")} >
					<Link href="/">
						Liên hệ
					</Link>
				</Button>
				
				
			</div>
		</nav>
	)
}